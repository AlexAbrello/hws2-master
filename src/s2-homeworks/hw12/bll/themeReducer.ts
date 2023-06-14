export type InitStateType = {
    themeId: number
}

const initState = {
    themeId: 1,
}

export const themeReducer = (state: InitStateType = initState, action: ChangeThemeType): InitStateType => { // fix any
    switch (action.type) {
        case "SET_THEME_ID": {
            return {
                ...state,
                themeId: action.id
            }
        }
        default:
            return state
    }
}

type ChangeThemeType = {
    type: string
    id: number
}

export const changeThemeId = (id: number): ChangeThemeType => ({ type: 'SET_THEME_ID', id }) // fix any
