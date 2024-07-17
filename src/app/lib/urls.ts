const Urls = {
    electoratesByCp: process.env.HOST ||'http://localhost:8080/dashboardContent/electorates-record/',
    repsByCp: process.env.HOST || 'https://app.overton.services/dashboardContent/electorates-record/',
    repsByElectorate: process.env.HOST || 'https://app.overton.services/dashboardContent/electorates-record/'
}
export { Urls }