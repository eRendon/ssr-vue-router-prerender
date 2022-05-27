import type { LocationQueryValue } from 'vue-router'

export interface IReferred {
    utm_content:  LocationQueryValue | LocationQueryValue[]
    utm_term:  LocationQueryValue | LocationQueryValue[]
    isReferred: boolean
}