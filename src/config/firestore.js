const firestoreConfig = {
  status: {
    collection: 'status',
    doc: 'cloud_status',
    open: 'open',
    windDown: 'windDown',
    testCollection: 'statusTest',
  },
  activity: {
    collection: 'status',
    doc: 'activity',
    type: 'type',
    detail: 'detail',
    testCollection: 'statusTest',
  },
};

export default firestoreConfig;
