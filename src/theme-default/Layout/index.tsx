import { usePageData } from '../../runtime';
import { Content } from '../../runtime/Content';
import 'uno.css';

export function Layout() {
  const pageData = usePageData();
  console.log(pageData);

  const { pageType } = pageData;
  const getContent = () => {
    if (pageType === 'home') {
      return <div>Home 页面</div>;
    } else if (pageType === 'doc') {
      return (
        <div>
          <h1 p="2" m="2" className="rounded-l-[var(--radius)]">
            Common Content
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
      <div>nav</div>
      {getContent()}
    </div>
  );
}
