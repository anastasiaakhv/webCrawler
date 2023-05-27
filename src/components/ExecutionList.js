import React, { useState, useEffect } from 'react';
import './ExecutionList.css';

const ExecutionList = ({ executions }) => {
  const [searchLabel, setSearchLabel] = useState('');
  const [searchStatus, setSearchStatus] = useState('');
  const [sortField, setSortField] = useState('label');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredExecutions, setFilteredExecutions] = useState(executions);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(2);

  useEffect(() => {
    const filtered = executions.filter((execution) =>
      execution.label.toLowerCase().includes(searchLabel.toLowerCase()) &&
      execution.status.toLowerCase().includes(searchStatus.toLowerCase())
    );

    const sorted = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return (String(a[sortField])).localeCompare(String(b[sortField]));
      } else {
        return (String(b[sortField])).localeCompare(String(a[sortField]));
      }
    });

    setFilteredExecutions(sorted);
    setCurrentPage(1);
  }, [executions, searchLabel, searchStatus, sortField, sortOrder]);

  const totalPages = Math.ceil(filteredExecutions.length / itemsPerPage);

  const paginatedData = filteredExecutions.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className="execution-list">
      <h2>Execution List</h2>
      <table>
        <thead>
          <tr>
            <th>
              Label
              <input
                type="text"
                placeholder="Search by label"
                value={searchLabel}
                onChange={(e) => setSearchLabel(e.target.value)}
              />
              <span onClick={() => handleSort('label', 'asc')}>&#x25B2;</span>
              <span onClick={() => handleSort('label', 'desc')}>&#x25BC;</span>
            </th>
            <th>
              Status
              <input
                type="text"
                placeholder="Search by status"
                value={searchStatus}
                onChange={(e) => setSearchStatus(e.target.value)}
              />
              <span onClick={() => handleSort('status', 'asc')}>&#x25B2;</span>
              <span onClick={() => handleSort('status', 'desc')}>&#x25BC;</span>
            </th>
            <th>
              Start Time
              <span onClick={() => handleSort('startTime', 'asc')}>&#x25B2;</span>
              <span onClick={() => handleSort('startTime', 'desc')}>&#x25BC;</span>
            </th>
            <th>
                End Time
                <span onClick={() => handleSort('endTime', 'asc')}>&#x25B2;</span>
                <span onClick={() => handleSort('endTime', 'desc')}>&#x25BC;</span>
              </th>
              <th>
                Sites Crawled
                <span onClick={() => handleSort('sitesCrawled', 'asc')}>&#x25B2;</span>
                <span onClick={() => handleSort('sitesCrawled', 'desc')}>&#x25BC;</span>
              </th>
            </tr>
          </thead>
          <tbody>
            {paginatedData.map((execution) => (
              <tr key={execution.id}>
                <td>{execution.label}</td>
                <td>{execution.status}</td>
                <td>{execution.startTime}</td>
                <td>{execution.endTime}</td>
                <td>{execution.sitesCrawled}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="pagination">
          <button
            disabled={currentPage === 1}
            onClick={() => handlePageChange(currentPage - 1)}
            className={currentPage === 1 ? 'disabled' : ''}
          >
            &laquo;
          </button>
          {Array.from({ length: totalPages }, (_, index) => (
            <button
              key={index}
              onClick={() => handlePageChange(index + 1)}
              className={currentPage === index + 1 ? 'disabled' : ''}
            >
              {index + 1}
            </button>
          ))}
          <button
            disabled={currentPage === totalPages}
            onClick={() => handlePageChange(currentPage + 1)}
            className={currentPage === totalPages ? 'disabled' : ''}
          >
            &raquo;
          </button>
        </div>
      </div>
    );
};

export default ExecutionList;