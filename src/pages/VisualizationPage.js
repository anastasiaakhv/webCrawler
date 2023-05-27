import React from 'react';
import VisualizationGraph from '../components/VisualizationGraph';

const VisualizationPage = () => {
  const nodes = [
    { id: 1, title: 'Example Node 1', url: 'https://example.com/1' },
    { id: 2, title: 'Example Node 2', url: 'https://example.com/2' },
  ];
  const links = [
    { source: 1, target: 2 },
  ];
  const mockNodes = [
    { id: 'A', crawled: true },
    { id: 'B', crawled: true },
    { id: 'C', crawled: false },
    { id: 'D', crawled: true },
    { id: 'E', crawled: true },
  ];
  
  const mockLinks = [
    { source: 'A', target: 'B' },
    { source: 'A', target: 'C' },
    { source: 'B', target: 'D' },
    { source: 'C', target: 'E' },
    { source: 'D', target: 'E' },
  ];
  
  return (
    <div>
      <h1>Visualization</h1>
      <VisualizationGraph nodes={mockNodes} links={mockLinks} />
    </div>
  );
};

export default VisualizationPage;
