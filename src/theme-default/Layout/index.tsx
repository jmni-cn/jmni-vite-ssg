import { usePageData } from '../../runtime';
import { Content } from '../../runtime/Content';
import { Nav } from '../components/Nav';
import '../styles/base.css';
import '../styles/vars.css';
import 'uno.css';
import { HomeLayout } from './HomeLayout/index';

export function Layout() {
  const pageData = usePageData();

  const { pageType } = pageData;
  const getContent = () => {
    if (pageType === 'home') {
      return <HomeLayout />;
    } else if (pageType === 'doc') {
      return (
        <div>
          <h1 p="2" m="2" className="rounded-l-[var(--radius)]">
            Common111 Content
          </h1>
          <h1>Doc Content</h1>
          <button
            p="y-2 x-4"
            bg="green-500"
            className="border-pink-700"
          ></button>
          <Content />
        </div>
      );
    } else {
      return <div>404 页面</div>;
    }
  };
  return (
    <div>
      <Nav />
      {/* <div>nav</div> */}
      {getContent()}
    </div>
  );
}
