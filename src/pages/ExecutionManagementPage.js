import React from 'react';
import ExecutionList from '../components/ExecutionList';

const ExecutionManagementPage = () => {
  const executions = [
    {
      id: 1,
      label: 'Example Site',
      status: 'completed',
      startTime: '2022-04-17T10:00:00Z',
      endTime: '2022-04-17T10:05:00Z',
      sitesCrawled: 42,
    },
    {
      id: 2,
      label: 'Example Site 2',
      status: 'completed',
      startTime: '2023-04-17T10:00:00Z',
      endTime: '2023-04-17T10:05:00Z',
      sitesCrawled: 42,
    },
  ];

  return (
    <div>
      <h1>Execution Management</h1>
      <ExecutionList executions={executions} />
    </div>
  );
};

export default ExecutionManagementPage;
