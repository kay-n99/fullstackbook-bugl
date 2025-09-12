/* global use, db */
use('blog-simulated')
db.getCollection('events').aggregate([
  {
    $project: {
      session: '$_id',
      duration: { $substract: ['$endDate', '$startDate'] },
      startDate: {
        $cond: [{ $eq: ['$action', 'startView'] }, '$date', undefined],
      },
      endDate: {
        $cond: [{ $eq: ['$action', 'endView'] }, '$date', undefined],
      },
    },
    $group: {
      _id: '$session',
      startDate: { $min: '$startDate' },
      endDate: { $max: '$endDate' },
    },
  },
])
