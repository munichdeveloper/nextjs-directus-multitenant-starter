import { env } from "@/env.mjs"
import { sendDirectusApiRequest } from "../lib/directusApi"

// field definitions here 
const fields = [
    {
        "field": "id",
        "type": "integer",
        "schema": {
            "name": "id",
            "data_type": "integer",
            "is_primary_key": true,
            "is_nullable": false,
            "has_auto_increment": true,
        }
    },
    {
        "field": "name",
        "type": "string",
        "schema": {
            "name": "name",
            "data_type": "string"
        }
    },
    {
        "field": "date_created",
        "type": "timestamp",
        "schema": {
            "name": "date_created",
            "data_type": "timestamp"
        },
        "meta": {
            "field": "date_created",
            "special": [
                "date-created",
                "cast-timestamp"
            ],
            "interface": "datetime",
            "readonly": true,
            "hidden": true
        }
    },
]

/**
 * Creates two example collections and their fields for the individual tenant user
 * @param email 
 * @returns 
 */
export async function createTenantCollectionsForNewUser(
    email: string
) {
    const fruits_collection = `fruits_${uuidv4()}`
    const cars_collection = `cars_${uuidv4()}`

    // create tenant if not exists yet
    const getTenantResponse = await sendDirectusApiRequest(
        `/items/tenants?filter[email][_eq]=${email}`,
        "GET",
        null,
        true
    )
    const { data } = getTenantResponse
    if (!data.length) {
        // tenant does not exist -> create tenant
        const bodyData_create_tenant = {
            name: `tenant_${email}}`,
            email,
            fruits_collection,
            cars_collection,
            access_token: env.DIRECTUS_USER_CREATOR_TOKEN
        }

        await sendDirectusApiRequest(
            "/items/tenants",
            "POST",
            bodyData_create_tenant,
            true
        )
    }
    // create role (multi tenancy setup)
    const bodyData_create_role = {
        name: `role_${email}_${uuidv4()}`,
        app_access: true,
        admin_access: false,
        access_token: env.DIRECTUS_USER_CREATOR_TOKEN
    }
    const createRoleResponse = await sendDirectusApiRequest(
        "/roles",
        "POST",
        bodyData_create_role,
        true
    )
    const { data: { data: nestedRoleData } } = createRoleResponse

    const { id: role } = nestedRoleData

    // create collections for that role (multi tenancy setup)
    createTenantCollections(fruits_collection, role)
    createTenantCollections(cars_collection, role)

    return {
        role, collections: {
            fruits_collection, cars_collection
        }
    }
}

async function createTenantCollections(collection: string, role: string) {
    const bodyData_create_tenant_collection = {
        collection,
        "meta": {
            collection,
            "icon": "format_quote"
        },
        "schema": {
            "name": collection,
        },
        fields,
        access_token: env.DIRECTUS_USER_CREATOR_TOKEN
    }
    const createContributionsCollectionResponse = await sendDirectusApiRequest(
        "/collections",
        "POST",
        bodyData_create_tenant_collection,
        true
    )
    const { data: { data: nestedContributionsCollectionData } } = createContributionsCollectionResponse
    const { collection: contributionsCollection } = nestedContributionsCollectionData

    // set permissions (multi tenancy setup)
    await createPermission(role, contributionsCollection, 'create')
    await createPermission(role, contributionsCollection, 'read')
    await createPermission(role, contributionsCollection, 'update')
    await createPermission(role, contributionsCollection, 'delete')
}

async function createPermission(role: string, collection: string, action: string) {
    const bodyData_create_permission = {
        role,
        collection,
        access_token: env.DIRECTUS_USER_CREATOR_TOKEN,
        action,
        fields:
            [
                "id",
                "name",
                "date_created",
            ]
    }
    await sendDirectusApiRequest(
        "/permissions",
        "POST",
        bodyData_create_permission,
        true
    )
}

function uuidv4() {
    return "10000000-1000-4000-8000-100000000000".replace(/[018]/g, (c: any) =>
        (c ^ crypto.getRandomValues(new Uint8Array(1))[0] & 15 >> c / 4).toString(16)
    )
}