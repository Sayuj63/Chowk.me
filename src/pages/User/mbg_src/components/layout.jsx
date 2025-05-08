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

  // Dummy content for each tab
  const getTileContent = (key) => {
    if (tab === TabKey.Contact) {
      // Show dummy contact info
      return (
        <div className="text-center">
          <div className="font-bold text-lg mb-2">Contact Info</div>
          <div>Email: johndoe@email.com</div>
          <div>Phone: +91 9876543210</div>
          <div>Location: Dehradun, India</div>
        </div>
      );
    } else if (tab === TabKey.Blog) {
      // Show dummy blog posts
      return (
        <div className="text-left">
          <div className="font-bold text-lg mb-2">Blog Post</div>
          <div className="font-semibold">How to Succeed in Startups</div>
          <div className="text-sm text-gray-500 mb-2">April 2024</div>
          <div className="text-gray-700">Tips and tricks for aspiring entrepreneurs in India...</div>
        </div>
      );
    } else if (tab === TabKey.Work) {
      // Show dummy project info
      return (
        <div className="text-left">
          <div className="font-bold text-lg mb-2">Project</div>
          <div className="font-semibold">Chowk.me Platform</div>
          <div className="text-sm text-gray-500 mb-2">React, Node.js, MongoDB</div>
          <div className="text-gray-700">A local business and networking platform for Indian cities.</div>
        </div>
      );
    } else {
      // Home: welcome or fun content
      return (
        <div className="text-center">
          <div className="font-bold text-lg mb-2">Welcome to the Profile Grid!</div>
          <div className="text-gray-700">Explore projects, blogs, and contact info using the tabs above.</div>
        </div>
      );
    }
  };

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
            <Block keyProp={key} content={getTileContent(key)} />
          </div>
        ))}
      </ResponsiveReactGridLayout>
    </div>
  );
}

const Block = ({ keyProp, content }) => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center p-6 bg-white text-[#111827] rounded-2xl text-3xl">
      {content}
    </div>
  );
};

export default Layout;
