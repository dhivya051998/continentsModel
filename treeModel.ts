interface district{
    districtName:string,
}
interface state{
    stateName:string,
    districts:district[]
}
interface country{
    countryName:string,
    states:state[]
}
interface continent{
    continentName:string,
    countries:country[]
}
interface treeModel{
    name:string,
    continents:continent[]
}