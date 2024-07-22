const Urls = {
    electoratesByCp: process.env.HOST ||'http://localhost:8080/dashboardContent/electorates-record/',
    //reps: process.env.HOST || 'http://localhost:8080/dashboardContent/reps-by-elects/',
    repsByElectorate: process.env.HOST || 'http://localhost:8080/dashboardContent/reps-record/'
}
export { Urls }