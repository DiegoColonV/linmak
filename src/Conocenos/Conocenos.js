function Conocenos() {
    return (
        <div>
            <main id="main">
                {/* ======= Breadcrumbs Section ======= */}
                <section className="breadcrumbs">
                    <div className="container">
                        <div className="d-flex justify-content-between align-items-center">
                            <h2>Inner Page</h2>
                            <ol>
                                <li><a href="index.html">Home</a></li>
                                <li>Inner Page</li>
                            </ol>
                        </div>
                    </div>
                </section>{/* End Breadcrumbs Section */}
                <section className="inner-page">
                    <div className="container">
                        <p>
                            Example inner page template
                        </p>
                    </div>
                </section>
            </main>{/* End #main */}
        </div>
    );
}

export default Conocenos;