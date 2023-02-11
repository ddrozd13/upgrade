import React from 'react';
import Card from '../Card/Card';
import PageLayout from '../PageLayout/PageLayout';
import styles from './CardList.module.scss';
import { GrApps, GrList } from 'react-icons/gr';
import {FormControl, InputLabel, Select, MenuItem} from '@mui/material';

const CardList = ({ data }) => {
  const [sort, setSort] = React.useState('');

  const handleSort = (event) => {
    setSort(event.target.value);
  };

  return (
    <PageLayout>
      <div className={styles.container}>
        <div className={styles.container_wrapper}>
          <div className={styles.filter}>
            <div className={styles.filter_category}>
              <div className={styles.filter_category_item}>Все</div>
              <div className={styles.filter_category_item}>Женщины</div>
              <div className={styles.filter_category_item}>Мужчины</div>
            </div>
            <div className={styles.filter_sort}>
              <FormControl sx={{ minWidth: 160}} size="small">
                <InputLabel  id="demo-select-small">Сортировать</InputLabel>
                <Select
                  labelId="demo-select-small"
                  id="demo-select-small"
                  sx={{
                    fontWeight: 400, fontSize: 14,
                    "&:hover": {
                      "&& fieldset": {
                        borderColor: "coral"
                      }
                    }, borderRadius: '8px'}}
                  value={sort}
                  label="Сортировать"
                  onChange={handleSort}
                >
                  <MenuItem value={10}>по популярности</MenuItem>
                  <MenuItem value={20}>от низкой цены</MenuItem>
                  <MenuItem value={30}>от высокой цены</MenuItem>
                </Select>
              </FormControl>
              <GrApps className={styles.filter_sort_icons}/>
              <GrList className={styles.filter_sort_icons}/>
            </div>
          </div>
          <div className={styles.list}>
            {data.map((el) => (
              <Card item={el} key={el.id+ el.price} />
            ))}
          </div>
        </div>
      </div>
    </PageLayout>
  );
};

export default CardList;
