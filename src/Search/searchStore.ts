import { makeAutoObservable } from "mobx";
import axios from "axios";
import UserStore from "../User/UserStore";

const apiUrl = "https://gateway.scan-interfax.ru";

class SearchStore {
  private objectSearchQuery = {};
  private _histograms = [];
  private _documents = [];
  private _isHistogramsLoading = false;
  private _isArticlesLoading = false;

  public get histograms(): any[] {
    return this._histograms;
  }

  public get isHistogramsLoading(): boolean {
    return this._isHistogramsLoading;
  }

  public get isArticlesLoading(): boolean {
    return this._isArticlesLoading;
  }

  public get totalDocumentsCount(): number {
    return this.histograms
      ?.find((x: any) => x.histogramType === "totalDocuments")
      ?.data.reduce(
        (accumulator: any, currentValue: any) =>
          accumulator + currentValue.value,
        0
      );
  }

  public get totalDocumentsHistogramData(): any[] {
    return (
      this.histograms?.find((x: any) => x.histogramType === "totalDocuments")
        ?.data ?? []
    );
  }

  public get riskFactorsHistogramData(): any[] {
    return (
      this.histograms?.find((x: any) => x.histogramType === "riskFactors")
        ?.data ?? []
    );
  }

  public get documents(): any[] {
    return this._documents;
  }

  setObjectSearch(query: any): void {
    this.objectSearchQuery = query;
  }

  search(searchForm: any): void {
    this._isHistogramsLoading = true;
    this._isArticlesLoading = true;
    this.updateObjectSearch(searchForm);

    const config = {
      headers: {
        Authorization: `Bearer ${this.userStore.currentToken?.accessToken}`,
        Accept: "application/json",
        "Content-type": "application/json",
      },
    };

    this.loadiHistograms(config);
    this.loadDocuments(config);
  }

  private loadiHistograms(config: any) {
    axios
      .post(
        `${apiUrl}/api/v1/objectsearch/histograms`,
        this.objectSearchQuery,
        config
      )
      .then((response) => {
        console.log("histograms", response.data.data);

        this._histograms = response.data.data;
        this._isHistogramsLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  private loadDocuments(config: any) {
    axios
      .post(`${apiUrl}/api/v1/objectsearch`, this.objectSearchQuery, config)
      .then((objectsSearchResponse) =>
        Promise.all([
          axios.post(
            `${apiUrl}/api/v1/documents`,
            JSON.stringify({
              ids: objectsSearchResponse.data.items.map(
                (x: any) => x.encodedId
              ),
            }),
            config
          ),
        ])
      )
      .then(([documentsResponse]) => {
        this._documents = documentsResponse.data;
        this._isArticlesLoading = false;
      })
      .catch((error) => {
        console.log(error);
      });
  }

  get getHistograms(): any[] {
    return this._histograms;
  }

  private updateObjectSearch(searchForm: any) {
    this.objectSearchQuery = {
      issueDateInterval: {
        startDate: searchForm.startDate, // от
        endDate: searchForm.endDate, // до
      },
      searchContext: {
        targetSearchEntitiesContext: {
          targetSearchEntities: [
            {
              type: "company",
              sparkId: null,
              entityId: null,
              inn: searchForm.companyInn, // ИНН
              maxFullness: searchForm.maxFullness, //признак максимальной полноты
              inBusinessNews: searchForm.inBusinessNews, // упоминание в бизнес-контексте
            },
          ],
          onlyMainRole: searchForm.onlyMainRole, //главная роль в публикации
          tonality: searchForm.tonality, // тональность
          onlyWithRiskFactors: searchForm.onlyWithRiskFactors, // публикации только с риск факторами
          riskFactors: {
            and: [],
            or: [],
            not: [],
          },
          themes: {
            and: [],
            or: [],
            not: [],
          },
        },
        themesFilter: {
          and: [],
          or: [],
          not: [],
        },
      },
      searchArea: {
        includedSources: [],
        excludedSources: [],
        includedSourceGroups: [],
        excludedSourceGroups: [],
      },
      attributeFilters: {
        excludeTechNews: searchForm.excludeTechNews, // исключать технические новости рынков
        excludeAnnouncements: searchForm.excludeAnnouncements, // исключать анонсы и календари
        excludeDigests: searchForm.excludeDigests, // исключать сводки новостей
      },
      similarMode: "duplicates",
      limit: searchForm.numberOfDocuments, // количество
      sortType: "sourceInfluence",
      sortDirectionType: "desc",
      intervalType: "month",
      histogramTypes: ["totalDocuments", "riskFactors"],
    };
  }

  constructor(private userStore: UserStore) {
    makeAutoObservable(this);
  }
}

export default SearchStore;
