import styles from "./Paginator.module.scss";
import React, {useState} from "react";
import {SvgSelector} from "../SvgSelector/SvgSelector";
// import {SvgSelector} from "../svgSelector/SvgSelector";

type PaginatorPropsType = {
  page: number
  pageCount: number
  pageCountOptions: number[]
  totalItemsCount: number
  onPageCallBack: (el: number) => void
  onPageCountCallBack: (el: number) => void
}

export const Paginator = ({
                            page,
                            pageCount,
                            totalItemsCount,
                            onPageCallBack,
                            onPageCountCallBack,
                            pageCountOptions
                          }: PaginatorPropsType) => {

  const windowInnerWidth = window.innerWidth
  const numberPages = windowInnerWidth < 401 ? 2 : windowInnerWidth > 700 ? 5 : 3
  const startEndPages = windowInnerWidth < 401 ? 3 : windowInnerWidth > 700 ? 9 : 5

  const [visibility, setVisibility] = useState<boolean>(false)

  const pagesCount = Math.ceil(totalItemsCount / pageCount)

  const pages = []
  for (let i = 1; i <= pagesCount; i++) {
    pages.push(i)
  }


  const onClickBackHandler = () => {
    if (page > 1) {
      onPageCallBack(page - 1)
    }
  }

  const onClickNextHandler = () => {
    if (page < pagesCount) {
      onPageCallBack(page + 1)
    }
  }


  return <div className={styles.paginationComponent}>
    <div className={styles.paginationBox}>
      <div className={styles.pageCountBox}>
        {visibility &&
					<div className={styles.pageCountOptions}>
            {pageCountOptions.map((el, index) => {
              const onClickHandler = () => {
                onPageCountCallBack(el)
                setVisibility(false)
              }
              return <div
                key={index}
                className={styles.el}
                onClick={onClickHandler}
              >
                {el}
              </div>
            })}
					</div>
        }
      </div>
      <div className={styles.pagBox}>
        <div className={styles.arrowsBox}>
          <span onClick={onClickBackHandler}><SvgSelector svgName={'LeftArrow'}/></span>
          <span onClick={onClickBackHandler}>LeftArrow</span>
        </div>
        {pages.filter(el => {
          const rightPages = page + numberPages
          const leftPages = page - numberPages
          const endPages = pagesCount - page
          if (endPages < numberPages) {
            return el > pagesCount - startEndPages
          }
          if (page < numberPages) {
            return el <= startEndPages
          }
          return el < rightPages && el > leftPages
        }).map((el, i) => <span
          key={i}
          className={`${styles.pageNumber} ${page === el ? styles.selectPage : ''}`}
          onClick={() => onPageCallBack(el)}
        >{el}</span>)}
        <div className={styles.arrowsBox}>
          <span onClick={onClickNextHandler}><SvgSelector svgName={'RightArrow'}/></span>
          <span onClick={onClickNextHandler}>RightArrow</span>

        </div>
      </div>
    </div>

  </div>
}
