interface district{
    name:string,
}
interface states{
    name:string,
    districts:district[]
}
interface country{
    name:string,
    states:states[]
}
interface continent{
    name:string,
    countries:country[]
}
interface treeModel{
    name:string,
    continent:continent[]
}