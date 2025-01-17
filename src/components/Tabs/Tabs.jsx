import clsx from 'clsx';
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import equipments from '../../Data/Equipment.json';
import vehicleDetails from '../../Data/VehicleDetails.json';
import ReviewsCard from '../ReviewsCard/ReviewsCard.jsx';
import BadgeEquipment from '../ui/BadgeEquipment/BadgesEquipment.jsx';
import css from './Tabs.module.css';
export default function CampersTabs({ data }) {
  const { reviews } = data;
  return (
    <Tabs className={css.reacttabs}>
      <TabList className={css.tablist}>
        <Tab
          className={clsx(css.tabstab, css.tabfirst)}
          selectedClassName={css.tabselected}
        >
          Features
        </Tab>
        <Tab className={css.tabstab} selectedClassName={css.tabselected}>
          Reviews
        </Tab>
      </TabList>
      <span className={css.divider}></span>
      <div className={css.tabcontainer}>
        <div>
          <TabPanel
            className={css.tabpanel}
            selectedClassName={css.tabpanelselected}
          >
            <ul className={css.list}>
              {equipments.map(item => {
                if (item.id === 'transmission' || item.id === 'engine')
                  item.title = data[item.id];
                if (data[item.id])
                  return (
                    <li key={item.id}>
                      <BadgeEquipment item={item} />
                    </li>
                  );
              })}
            </ul>
            <p className={css.title}>Vehicle details</p>
            <span className={clsx(css.divider, css.dividerdetal)}></span>
            <ul className={css.listdetal}>
              {vehicleDetails.map(item => {
                if (data[item.id]) {
                  item.data = data[item.id];
                  return (
                    <li key={item.id} className={css.item}>
                      <p>{item.title}</p>
                      <p>{item.data}</p>
                    </li>
                  );
                }
              })}
            </ul>
          </TabPanel>
          <TabPanel
            className={css.tabpanel}
            selectedClassName={css.tabpanelselected}
          >
            <ul className={css.listreview}>
              {reviews.map((item, index) => {
                return (
                  <li key={index}>
                    <ReviewsCard data={item} />
                  </li>
                );
              })}
            </ul>
          </TabPanel>
        </div>
        <div>
          <p>Ghbdtn</p>
        </div>
      </div>
    </Tabs>
  );
}
