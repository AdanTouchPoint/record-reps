const Urls = {
    electoratesByCp: `${process.env.NEXT_PUBLIC_HOST}/dashboardContent/electorates-record/` ||'http://localhost:8080/dashboardContent/electorates-record/',
    //reps: process.env.HOST || 'http://localhost:8080/dashboardContent/reps-by-elects/',
    repsByElectorate: `${process.env.NEXT_PUBLIC_HOST}/dashboardContent/reps-record/` || 'http://localhost:8080/dashboardContent/reps-record/'
}
export { Urls }