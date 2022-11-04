import Header from "../components/Header";
import MainVisual from "../components/TopPage/MainVisual";
import MainMenu from "../components/TopPage/MainMenu";

export default function Home() {
  return (
    <>
      <Header title="トップページ" />
      <MainVisual />
      <MainMenu />
    </>
  );
}
