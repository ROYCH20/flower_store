import {$authHost, $host} from "./index";
import {jwt_decode} from "jwt-decode";

export const createType = async (type) => {
    const {data} = await $authHost.post('api/type', type)
    return data
}

export const fetchTypes = async () => {
    const {data} = await $host.get('api/type')
    return data
}

export const createBrand = async (brand) => {
    const {data} = await $authHost.post('api/brand', brand)
    return data
}

export const fetchBrands = async () => {
    const {data} = await $host.get('api/brand', )
    return data
}

export const createFlower = async (flower) => {
    const {data} = await $authHost.post('api/flower', flower)
    return data
}

export const fetchFlowers = async (typeId, brandId, page, limit= 5) => {
    const {data} = await $host.get('api/flower', {params: {
            typeId, brandId, page, limit
        }})
    return data
}

export const fetchOneDevice = async (id) => {
    const {data} = await $host.get('api/flower/' + id)
    return data
}
