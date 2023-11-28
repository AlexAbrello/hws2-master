import React, {ChangeEvent} from 'react'
import SuperSelect from '../../../hw07/common/c5-SuperSelect/SuperSelect'
import {Pagination} from '@mui/material'
import s from './SuperPagination.module.css'

export type SuperPaginationPropsType = {
    id?: string
    page: number
    itemsCountForPage: number
    totalCount: number
    onChange: (page: number, count: number) => void
}

const SuperPagination: React.FC<SuperPaginationPropsType> = (
    {
        page, itemsCountForPage, totalCount, onChange, id = 'hw15',
    }
) => {
    const lastPage = Math.round(totalCount / itemsCountForPage) // пишет студент // вычислить количество страниц

    const onChangeCallback = (event: ChangeEvent<unknown>, page: number) => {
      onChange(page, itemsCountForPage)
        // пишет студент
    }

    const onChangeSelect = (event: ChangeEvent<HTMLSelectElement>) => {
      onChange(page, +event.currentTarget.value)
        // пишет студент
    }

    return (
        <div className={s.pagination}>
            <Pagination
                id={id + '-pagination'}
                sx={{
                    button: {
                        borderRadius: '2px',
                        marginRight: '20px',
                        marginLeft: '0px',
                        width: '24px',
                        height: '24px',
                        padding: '4px 8px',
                        fontSize: '14px',
                        fontWeight: 400,
                        backgroundColor: 'transparent',
                        '&:hover': {
                            backgroundColor: '#0066CC',
                            color: '#fff',
                        },
                        '&.Mui-selected': {
                            backgroundColor: '#0066CC',
                            color: '#fff',
                        },
                    },
                }}
                page={page}
                count={lastPage}
                onChange={onChangeCallback}
                hideNextButton
                hidePrevButton
            />

            <span className={s.text1}>
                показать
            </span>

            <SuperSelect
                id={id + '-pagination-select'}
                value={itemsCountForPage}
                options={[
                    {id: 4, value: 4},
                    {id: 7, value: 7},
                    {id: 10, value: 10},
                ]}
                onChange={onChangeSelect}
            />

            <span className={s.text2}>
                строк в таблице
            </span>
        </div>
    )
}

export default SuperPagination
