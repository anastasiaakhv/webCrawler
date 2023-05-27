import React, { useState, useEffect } from 'react';
import SiteRecordList from '../components/SiteRecordList';
import { siteRecords } from '../apis/mockData';

const SiteManagementPage = () => {

    const [record, setRecords] = useState([]);

    useEffect(() => {
      const loadRecords = async () => {
        const data = siteRecords;
        setRecords(data);
      };
      loadRecords();
    }, []);

  return (
    <div>
      <h1>Site Management</h1>
      <SiteRecordList records={siteRecords} />
    </div>
  );
};

export default SiteManagementPage;
