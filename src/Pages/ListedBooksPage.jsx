import { Tab, TabList, TabPanel, Tabs } from "react-tabs";
import "react-tabs/style/react-tabs.css";
import SecondaryPageHeader from "../components/SecondaryPageHeader";
import BookAddedList from "../components/BookAddedList";
import { useState } from "react";
import { Outlet } from "react-router-dom";

const ListedBooksPage = () => {
  const [tabIndex, setTabIndex] = useState(0);

  return (
    <>
      <SecondaryPageHeader title="Books Added To Your List" />
      <div className="mx-auto my-10 max-w-7xl px-3 lg:px-6">
        <Tabs selectedIndex={tabIndex} onSelect={(index) => setTabIndex(index)}>
          <TabList>
            <Tab>
              <p className="text-xl font-medium text-primary">Read Books</p>
            </Tab>
            <Tab>
              <p className="text-xl font-medium text-primary ">
                Books WishList
              </p>
            </Tab>
          </TabList>
          <TabPanel>
            <BookAddedList />
          </TabPanel>
          <TabPanel></TabPanel>
        </Tabs>
      </div>
      <Outlet />
    </>
  );
};

export default ListedBooksPage;
