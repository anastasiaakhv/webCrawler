import React, { useState, useEffect } from 'react';
import SiteRecordForm from './SiteRecordForm';
import Select from 'react-select';
import './SiteRecordList.css';

const SiteRecordList = ({ records }) => {
  const [showForm, setShowForm] = useState(false);
  const [editingRecord, setEditingRecord] = useState(null);
  const [searchUrl, setSearchUrl] = useState('');
  const [searcRegEXBoundary, setSearcRegEXBoundary] = useState('');
  const [searchLabel, setSearchLabel] = useState('');
  const [searchPeriodicity, setSearchPeriodicity] = useState('');
  const [searchActiveStatus, setSearchActiveStatus] = useState('');
  const [searchTags, setSearchTags] = useState([]);
  const [sortField, setSortField] = useState('label');
  const [sortOrder, setSortOrder] = useState('asc');
  const [filteredRecords, setFilteredRecords] = useState(records);
  
  const [uniqueTags, setUniqueTags] = useState([]);

  const [currentPage, setCurrentPage] = useState(1);
  const [itemsPerPage, setItemsPerPage] = useState(1);

  useEffect(() => {
    const filtered = records.filter((record) =>
      record.url.toLowerCase().includes(searchUrl.toLowerCase()) &&
      record.boundaryRegExp.toLowerCase().includes(searcRegEXBoundary.toLowerCase()) &&
      record.label.toLowerCase().includes(searchLabel.toLowerCase()) &&
      (searchPeriodicity === '' || record.periodicity === searchPeriodicity) &&
      (searchActiveStatus === '' || record.isActive === (searchActiveStatus === 'true')) &&
      (searchTags.length === 0 || searchTags.every((tag) => record.tags.includes(tag)))
    );

    const sorted = filtered.sort((a, b) => {
      if (sortOrder === 'asc') {
        return a[sortField].localeCompare(b[sortField]);
      } else {
        return b[sortField].localeCompare(a[sortField]);
      }
    });

    const tagsSet = new Set();
    records.forEach((record) => {
      record.tags.forEach((tag) => {
        tagsSet.add(tag);
      });
    });
  
    setUniqueTags(Array.from(tagsSet));
    setFilteredRecords(sorted);
    setCurrentPage(1);
  }, [records, searchUrl, searcRegEXBoundary, searchLabel, searchPeriodicity, searchActiveStatus, searchTags, sortField, sortOrder]);
  
  const totalPages = Math.ceil(filteredRecords.length / itemsPerPage);

  const paginatedData = filteredRecords.slice(
    (currentPage - 1) * itemsPerPage,
    currentPage * itemsPerPage
  );

  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  const handleAddClick = () => {
    setEditingRecord(null);
    setShowForm(true);
  };

  const handleEditClick = (record) => {
    setEditingRecord(record);
    setShowForm(true);
  };

  const handleDeleteClick = (record) => {
    // Delete the record
  };

  const handleFormSubmit = (updatedRecord) => {
    // Update records with updatedRecord
    setShowForm(false);
  };

  const handleFormCancel = () => {
    setShowForm(false);
  };

  const handleSort = (field, order) => {
    setSortField(field);
    setSortOrder(order);
  };

  return (
    <div className='site-record-list'>
      <h2>Site Records</h2>
      <button onClick={handleAddClick}>Add Site Record</button>
      {showForm && (
        <SiteRecordForm
          onSubmit={handleFormSubmit}
          onCancel={handleFormCancel}
          initialValues={editingRecord}
        />
      )}
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
              URL
              <input
                type="text"
                placeholder="Search by URL"
                value={searchUrl}
                onChange={(e) => setSearchUrl(e.target.value)}
              />
              <span onClick={() => handleSort('url', 'asc')}>&#x25B2;</span>
              <span onClick={() => handleSort('url', 'desc')}>&#x25BC;</span>
            </th>
            <th>
            RegExp Boundary 
              <input
                type="text"
                placeholder="Search by RegExp Boundary"
                value={searcRegEXBoundary}
                onChange={(e) => setSearcRegEXBoundary(e.target.value)}
              />
              <span onClick={() => handleSort('url', 'asc')}>&#x25B2;</span>
              <span onClick={() => handleSort('url', 'desc')}>&#x25BC;</span>
            </th>
            <th>
              Periodicity
              <select
                value={searchPeriodicity}
                onChange={(e) => setSearchPeriodicity(e.target.value)}
              >
                <option value="">All</option>
                <option value="minute">Minute</option>
                <option value="hour">Hourly</option>
                <option value="day">Daily</option>
              </select>
              <span onClick={() => handleSort('periodicity', 'asc')}>&#x25B2;</span>
              <span onClick={() => handleSort('periodicity', 'desc')}>&#x25BC;</span>
            </th>
            <th>
              IsActive
            <select
                value={searchActiveStatus}
                onChange={(e) => setSearchActiveStatus(e.target.value)}
              >
                <option value="">All</option>
                <option value={true}>Active</option>
                <option value={false}>Inactive</option>
              </select>
            </th>
            <th>
              Tags
             <Select
                isMulti
                options={uniqueTags.map((tag) => ({ value: tag, label: tag }))}
                value={searchTags.map((tag) => ({ value: tag, label: tag }))}
                onChange={(selectedOptions) => {
                  setSearchTags(selectedOptions.map((option) => option.value));
                }}
              />
            </th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>
          {paginatedData.map((record) => (
            <tr key={record.id}>
              <td>{record.label}</td>
              <td>{record.url}</td>
              <td>{record.boundaryRegExp}</td>
              <td>{record.periodicity}</td>
              <td>{record.isActive ? "Active" : "Inactive"}</td>
              <td>{record.tags.join(', ')}</td>
              <td>
                <button onClick={() => handleEditClick(record)}>Edit</button>
                <button onClick={() => handleDeleteClick(record)}>Delete</button>
              </td>
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

export default SiteRecordList;
