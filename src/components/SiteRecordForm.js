import React from 'react';
import './SiteRecordList.css';

const SiteRecordForm = ({ onSubmit, onCancel, initialValues }) => {
  const [formValues, setFormValues] = React.useState(initialValues || {});

  const handleChange = (event) => {
    setFormValues({ ...formValues, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    onSubmit(formValues);
  };

  return (
    <div className="form-container">
      <h3>{initialValues ? 'Edit' : 'Add'} Site Record</h3>
      <form onSubmit={handleSubmit}>
        <label htmlFor="label">Label</label>
        <input
          type="text"
          name="label"
          id="label"
          value={formValues.label || ''}
          onChange={handleChange}
        />

        <label htmlFor="boundaryRegExp">RegExp Boundary</label>
        <input
          type="text"
          name="boundaryRegExp"
          id="boundaryRegExp"
          value={formValues.url || ''}
          onChange={handleChange}
        />

        <label htmlFor="url">URL</label>
        <input
          type="text"
          name="url"
          id="url"
          value={formValues.url || ''}
          onChange={handleChange}
        />

        <label htmlFor="periodicity">Periodicity</label>
        <select
          name="periodicity"
          id="periodicity"
          value={formValues.periodicity || ''}
          onChange={handleChange}
        >
          <option value="minute">Minute</option>
          <option value="hour">Hourly</option>
          <option value="day">Daily</option>
        </select>

        <label htmlFor="tags">Tags</label>
        <input
          type="text"
          name="tags"
          id="tags"
          value={(formValues.tags && formValues.tags.join(', ')) || ''}
          onChange={(event) => {
            const tagsArray = event.target.value.split(',').map((tag) => tag.trim());
            setFormValues({ ...formValues, tags: tagsArray });
          }}
        />

        <label htmlFor="isActive">Is Active</label>
        <select
          name="isActive"
          id="isActive"
          value={formValues.isActive || ''}
          onChange={handleChange}
        >
          <option value={true}>Active</option>
          <option value={false}>Inactive</option>
        </select>

        <button type="submit">Save</button>
        <button type="button" onClick={onCancel}>
          Cancel
        </button>
      </form>
    </div>
  );
};

export default SiteRecordForm;
