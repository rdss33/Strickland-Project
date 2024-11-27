import "./FloatingRibbon.css"

export default function FloatingRibbon({children,anchorClass}){
    return(
        <div className="floating-ribbon">
            <a className={anchorClass} href="http://google.com">{children}</a>
        </div>
    );
}