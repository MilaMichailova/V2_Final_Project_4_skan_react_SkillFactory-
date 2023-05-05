export type SearchParams = {
  intervalType: IntervalType;
  histogramTypes: string[];
  issueDateInterval: DateInterval;
  //   searchContext: SearchContext;
  similarMode: "none" | "duplicates";
  limit: number;
  sortType: string;
  sortDirectionType: string;
  //   attributeFilters: Attributes;
};

enum IntervalType {
  Day = "day",
  Week = "week",
  Month = "month",
  Quarter = "quarter",
  Year = "year",
}

export type DateInterval = {
  startDate: string;
  endDate: string;
};

// export type SearchContext = {
//   targetSearchEntitiesContext: TargetSearchEntitiesContext;
//   searchEntitiesFilter: SearchEntity;
//   locationsFilter: SearchLocation;
//   themesFilter: Theme;
// };

// export type TargetSearchEntitiesContext = {
//   targetSearchEntities: TargetSearchEntity;
//   onlyMainRole: boolean;
//   onlyWithRiskFactors: boolean;
//   tonality: string;
// };

// export type TargetSearchEntity = {
//   type: string;
//   inBusinessNews: boolean;
//   sparkId: number;
//   entityId: number;
//   inn: string;
//   maxFullness: boolean;
// };

// export type SearchEntity = {
//   type: string;
//   inBusinessNews: boolean;
//   sparkId: number;
//   entityId: number;
//   inn: string;
//   maxFullness: boolean;
// };
