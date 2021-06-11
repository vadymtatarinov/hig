/* function getRulesByPresentation(themeData) {
  return {
    fontSize: themeData[`menu.header.fontSize`],
    fontWeight: themeData[`menu.header.fontWeight`],
    color: themeData[`menu.header.fontColor`],
    opacity: 0.5,
    textTransform: `uppercase`,
    cursor: `default`,
    padding: `0 
        ${themeData["menu.item.paddingHorizontal"]}
        ${themeData["menu.header.marginBottom"]}`
  };
} */
// ADD TO THEME-DATA
// MEDIUM DENSITY = 40PX TOTAL HEIGHT
// HIGHT DENSITY = 24PX TOTAL HEIGHT
// indicator wrapper - 16/12 accordion.header.indicatorSize

export default function stylesheet(props, themeData) {
  // console.log('stylesheet');
  // console.log(props);
    const {
      alternateBg,
      guidelines,
      indicator,
      selected,
      stylesheet: customStylesheet
    } = props;
    // temp until we get this into theme data
    const isMediumDensity = themeData['treeView.row.paddingVertical'] === `8px`
    const itemHeight = isMediumDensity ? `24px` : `16px`;
    const bgHeight = isMediumDensity ? `160px` : `96px`;
    const guideLineVerticalOffsetLeft = isMediumDensity ? `0` : `-3px`;
    const guideLineHorizontalOffsetTop = isMediumDensity ? `9px` : `2px`;
    const operatorPadding = isMediumDensity ? `20px` : `19px`;
    const caretPadding = isMediumDensity ? `15px` : `12px`;
    const styles = {
      higTreeViewWrapper: {
        ...(alternateBg
          ? {
              backgroundImage: `repeating-linear-gradient(
                0deg,
                ${themeData['colorScheme.surface.level200']},
                ${themeData['colorScheme.surface.level200']} 25%,
                ${themeData['colorScheme.surface.level100']} 25%,
                ${themeData['colorScheme.surface.level100']} 50%,
                ${themeData['colorScheme.surface.level200']} 50%,
                ${themeData['colorScheme.surface.level200']} 75%,
                ${themeData['colorScheme.surface.level100']} 75%,
                ${themeData['colorScheme.surface.level100']} 100%
              )`,
              backgroundSize: `${bgHeight} ${bgHeight}`
            }
          : {}
        ),
        margin: 0
      },
      higTreeView: {
        color: themeData[`treeView.fontColor`],
        fontFamily: themeData[`treeView.fontFamily`],
        fontSize: themeData[`treeView.item.fontSize`],
        fontWeight: themeData[`treeView.item.fontWeight`],
        listStyle: `none`,
        margin: 0,
        outline: 0,
        padding: 0,
        // "& ul": {
          // listStyle: `none`,
          // paddingLeft: `4px`,
          "& > li": {
            "& > div": {
              "&:first-of-type": {
                "&:last-child": {
                  margin: 0,
                  paddingLeft: 0
                }
              }
            },
            // overflow: `hidden`,
            // width: `100%`,
            "&::before": {
              /* ...(guidelines ? { borderTop: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
              display: `inline-block`,
              content: `""`,
              left: 0,
              margin: 0,
              position: `absolute`,
              top: `7px`,
              transform: `translateY(10px)`,
              width: themeData['treeView.row.paddingHorizontal'] */
              border: `none`
            },
            "&::after": {
              border: `none`
              /* ...(guidelines ? { borderLeft: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
              display: `inline-block`,
              content: `""`,
              height: `100%`,
              left: 0,
              position: `absolute`,
              top: `0`,
              width: `20px` */
            },
          },
          /* "& li:last-child": {
            "&::after": {
              top: `-9px`,
              height: `24px`
            }
          } */
        // }
      },
      higTreeItem: {
        // height: itemHeight,
        margin: 0,
        // padding: `${themeData['treeView.row.paddingVertical']} ${themeData['treeView.row.paddingHorizontal']}`,
        position: `relative`,
        /* "& [aria-expanded='true']": {
          padding: 0
        },
        "& [aria-expanded='false']": {
          padding: 0
        }, */
        "&::before": {
          ...(guidelines ? { borderTop: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
          display: `inline-block`,
          content: `""`,
          left: 0,
          margin: 0,
          position: `absolute`,
          top: guideLineHorizontalOffsetTop,
          transform: `translateY(10px)`,
          width: isMediumDensity ? themeData['treeView.row.paddingHorizontal'] : `calc(${themeData['treeView.row.paddingHorizontal']} - 1px)`
        },
        "&::after": {
          ...(guidelines ? { borderLeft: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
          display: `inline-block`,
          content: `""`,
          height: `100%`,
          left: guideLineVerticalOffsetLeft,
          position: `absolute`,
          top: `0`,
          width: `20px`
        },
        "&:first-of-type": {
          "&::after": {
            ...(isMediumDensity 
              ? { top: `-10px`, height: `calc(100% + 10px)` }
              : { top: `-3px`, height: `100%` } 
            )
          }
        },
        "&:last-child": {
          "&::after": {
            ...(isMediumDensity 
              ? { top: `-9px`, height: `24px` }
              : { top: `-3px`, height: `15px` } 
            )
          }
        }
      },
      higTreeItemContentWrapper: {
        alignItems: `center`,
        display: `inline-flex`,
        paddingLeft: themeData['treeView.row.paddingHorizontal'], 
        ...(selected 
          ? {
              background: themeData[`colorScheme.background.on.default`],
              marginLeft: themeData['treeView.row.paddingHorizontal'],
              paddingLeft: 0
            }
          : {}),
        "& > svg": {
          marginRight: themeData[`treeView.icon.marginRight`]
        }
      },
      /* higTreeItemSubTreeViewWrapper: {
        padding: `0 0 0 15px`
      }, */
      higTreeItemSubTreeView: {
        listStyle: `none`,
        margin: 0,
        padding: indicator === `caret` 
          ? `0 0 0 ${caretPadding}`
          : `0 0 0 ${operatorPadding}`
      },
      higTreeItemSubTreeViewLabelWrapper: {
        display: `flex`,
        height: itemHeight,
        lineHeight: itemHeight,
        maxWidth: `calc(100% - 10px)`,
        padding: `${themeData['treeView.row.paddingVertical']} ${themeData['treeView.row.paddingHorizontal']}`,
        overflow: `hidden`,
        textOverflow: `ellipsis`,
        whiteSpace: `nowrap`
      },
      higTreeItemSubTreeViewLabelContentWrapper: {
        alignItems: `center`,
        display: `flex`,
        ...(selected ? { background: themeData[`colorScheme.background.on.default`] } : {}),
        "& > svg": {
          marginRight: themeData[`treeView.icon.marginRight`],
          "&:first-of-type": {
            fill: themeData[`treeView.indicatorColor`]
          }
        }
      },
      /* higTreeItemSubTreeViewIndicatorWrapper: {
        alignItems: `center`,
        display: `flex`,
        height: itemHeight,
        justifyContent: `center`,
        width: itemHeight
      }, */
      higTreeItemSubTreeItem: {
        height: itemHeight,
        padding: `${themeData['treeView.row.paddingVertical']} ${themeData['treeView.row.paddingHorizontal']}`,
        position: `relative`,
        "&::before": {
          ...(guidelines ? { borderTop: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
          display: `inline-block`,
          content: `""`,
          left: 0,
          margin: 0,
          position: `absolute`,
          top: guideLineHorizontalOffsetTop,
          transform: `translateY(10px)`,
          width: themeData['treeView.row.paddingHorizontal']
        },
        "&::after": {
          ...(guidelines ? { borderLeft: `1px dashed ${themeData['treeView.guideLine.backgroundColor']}` } : {}),
          display: `inline-block`,
          content: `""`,
          height: `100%`,
          left: guideLineVerticalOffsetLeft,
          position: `absolute`,
          top: `0`,
          width: `20px`
        },
        "&:first-of-type": {
          "&::after": {
            ...(isMediumDensity 
              ? { top: `-10px`, height: `calc(100% + 10px)` }
              : { top: `-3px`, height: `100%` } 
            )
          }
        },
        "&:last-child": {
          "&::after": {
            ...(isMediumDensity 
              ? { top: `-9px`, height: `24px` }
              : { top: `-3px`, height: `15px` } 
            )
          }
        }
      }
    };
  
    return customStylesheet ? customStylesheet(styles, props, themeData) : styles;
  }