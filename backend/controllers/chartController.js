const Chart = require("../models/chart");


// Find all charts => /api/v1/charts
exports.getCharts = async(req, res, next) => {

    const charts = await Chart.find();
    
    res.status(200).json({
        success: true,
        chartCount: charts.length,
        charts
    })
}