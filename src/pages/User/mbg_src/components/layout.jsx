import React, { useEffect, useMemo, useState } from "react";
import { Responsive, WidthProvider } from "react-grid-layout";
import { TabKey } from "../App";
import {
  ContactLayouts,
  HomeLayouts,
  NotesLayouts,
  WorkLayouts,
  keys,
} from "../utils/layout.helper.js";

function Layout({ tab, setTab, left, sliderWidth }) {
  const [currentlayout, setCurrentLayout] = useState(HomeLayouts);

  useEffect(() => {
    switch (tab) {
      case TabKey.Work:
        setCurrentLayout(WorkLayouts);
        break;
      case TabKey.Home:
        setCurrentLayout(HomeLayouts);
        break;
      case TabKey.Contact:
        setCurrentLayout(ContactLayouts);
        break;
      case TabKey.Blog:
        setCurrentLayout(NotesLayouts);
        break;
      default:
        setCurrentLayout(HomeLayouts);
    }
  }, [tab]);

  const ResponsiveReactGridLayout = useMemo(
    () => WidthProvider(Responsive),
    []
  );

  return (
    <div className="relative w-full h-full" style={{background: 'transparent'}}>
      <ResponsiveReactGridLayout
        className="w-full"
        breakpoints={{ xl: 1200, lg: 899, md: 768, sm: 480, xs: 200 }}
        cols={{ xl: 3, lg: 3, md: 2, sm: 1, xs: 1 }}
        rowHeight={300}
        layouts={currentlayout}
        style={{ margin: 0, padding: 0 }}
      >
        {keys.map((key) => (
          <div
            key={key}
            className="bg-white flex justify-center items-center shadow rounded-2xl text-2xl text-[#111827] visible cursor-grab active:cursor-grabbing"
          >
            <Block keyProp={key} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}

const Block = ({ keyProp }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-6 bg-white text-[#111827] rounded-2xl text-3xl uppercase">
      {keyProp}
    </div>
  );
};

export default Layout;
