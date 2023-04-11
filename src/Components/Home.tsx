import { useStore } from "../Store";
import { observer } from "mobx-react-lite";

const Home = () => {
  const { userStore } = useStore();

  return (
    <div>
      <h1>Главная страница</h1>
      <div>Пользователь: {userStore.currentUser.userName}</div>
    </div>
  );
};

export default observer(Home);
