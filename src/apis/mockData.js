export const siteRecords = [
    {
      id: '1',
      url: 'https://example.com',
      boundaryRegExp: '^https://example.com',
      periodicity: 'hour',
      label: 'Example Site',
      isActive: true,
      tags: ['blog', 'example'],
      lastCrawl: '2023-04-16T08:00:00Z',
    },
    {
      id: '2',
      url: 'https://another-example.com',
      boundaryRegExp: '^https://another-example.com',
      periodicity: 'day',
      label: 'Another Example Site',
      isActive: true,
      tags: ['blog', 'likes'],
      lastCrawl: '2023-04-16T08:00:00Z',
    },
    {
      id: '3',
      url: 'https://another-one.com',
      boundaryRegExp: '^https://another-one.com',
      periodicity: 'day',
      label: 'Another Site',
      isActive: true,
      tags: ['blog', 'comments'],
      lastCrawl: '2023-05-16T08:00:00Z',
    }
  ];

  export const executions = [
    {
      id: '1',
      websiteRecordId: '1',
      label: 'Example Blog',
      status: 'completed',
      startTime: '2023-04-16T08:00:00Z',
      endTime: '2023-04-16T08:10:00Z',
      sitesCrawled: 42,
    }
  ];
  