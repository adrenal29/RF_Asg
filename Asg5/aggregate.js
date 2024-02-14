// userAggregation.js

const aggregateUserData = async (User) => {
    try {
      return await User.aggregate([
        {
            $group: {
              _id: "$country",
              totalCountryUsers: { $sum: 1 },
              totalAge: { $sum: "$age" }
            }
          },
          {
            $group: {
              _id: null,
              totalUsers: { $sum: "$totalCountryUsers" },
              totalAge: { $sum: "$totalAge" },
              countries: {
                $push: {
                  country: "$_id",
                  totalCountryUsers: "$totalCountryUsers",
                  averageAge: { $divide: ["$totalAge", "$totalCountryUsers"] }
                }
              }
            }
          },
          {
            $project: {
              _id: 0,
              totalUsers: 1,
              overallAverageAge: { $divide: ["$totalAge", "$totalUsers"] },
              countries: 1
            }
          }
      ]);
    } catch (error) {
      console.error('Error:', error);
      throw new Error('Failed to aggregate user data');
    }
  };
  
  module.exports = aggregateUserData;
  