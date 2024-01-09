interface district{
    districtName:string,
}
interface states{
    stateName:string,
    districts:district[]
}
interface country{
    countryName:string,
    states:states[]
}
interface continent{
    continentName:string,
    countries:country[]
}
interface treeModel{
    name:string,
    continent:continent[]
}