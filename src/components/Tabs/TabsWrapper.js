


function TabsWrapper(props) {
    const { children, ...rest } = props;

    return (
        <div className="ltn__shop-details-tab-inner ltn__shop-details-tab-inner-2" {...rest}>
            {children}
        </div>
    )
}


export default TabsWrapper;