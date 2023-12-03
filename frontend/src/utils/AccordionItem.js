const AccordionItem = ({data}) => {
    return (
        <li className="accordion_item">
            <button className="button">
                {data.title}
                <span className="control">-</span>
            </button>
            <div className="accordion_content">
                <div className="contents">{data.content}</div>
            </div>
        </li>
    )
}

export default AccordionItem;