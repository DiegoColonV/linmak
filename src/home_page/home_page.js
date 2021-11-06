import "../App.css";
import Hero from "./Hero";

function HomePage() {
    return (
        <div>
            <Hero/>
            <main id="main">
                {/* ======= App Features Section ======= */}
                <section id="features" className="features">
                    <div className="container">
                        <div className="section-title">
                            <h2>App Features</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-xl-7 d-flex align-items-stretch order-2 order-lg-1">
                                <div className="content d-flex flex-column justify-content-center">
                                    <div className="row">
                                        <div className="col-md-6 icon-box" data-aos="fade-up">
                                            <i className="bx bx-receipt" />
                                            <h4>Corporis voluptates sit</h4>
                                            <p>Consequuntur sunt aut quasi enim aliquam quae harum pariatur laboris nisi ut aliquip</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={100}>
                                            <i className="bx bx-cube-alt" />
                                            <h4>Ullamco laboris nisi</h4>
                                            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={200}>
                                            <i className="bx bx-images" />
                                            <h4>Labore consequatur</h4>
                                            <p>Aut suscipit aut cum nemo deleniti aut omnis. Doloribus ut maiores omnis facere</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={300}>
                                            <i className="bx bx-shield" />
                                            <h4>Beatae veritatis</h4>
                                            <p>Expedita veritatis consequuntur nihil tempore laudantium vitae denat pacta</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={400}>
                                            <i className="bx bx-atom" />
                                            <h4>Molestiae dolor</h4>
                                            <p>Et fuga et deserunt et enim. Dolorem architecto ratione tensa raptor marte</p>
                                        </div>
                                        <div className="col-md-6 icon-box" data-aos="fade-up" data-aos-delay={500}>
                                            <i className="bx bx-id-card" />
                                            <h4>Explicabo consectetur</h4>
                                            <p>Est autem dicta beatae suscipit. Sint veritatis et sit quasi ab aut inventore</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="image col-xl-5 d-flex align-items-stretch justify-content-center order-1 order-lg-2" data-aos="fade-left" data-aos-delay={100}>
                                <img src="img/features.svg" className="img-fluid" alt="" />
                            </div>
                        </div>
                    </div>
                </section>{/* End App Features Section */}
                {/* ======= Details Section ======= */}
                <section id="details" className="details">
                    <div className="container">
                        <div className="row content">
                            <div className="col-md-4" data-aos="fade-right">
                                <img src="img/details-1.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8 pt-4" data-aos="fade-up">
                                <h3>Voluptatem dignissimos provident quasi corporis voluptates sit assumenda.</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <ul>
                                    <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check" /> Iure at voluptas aspernatur dignissimos doloribus repudiandae.</li>
                                    <li><i className="bi bi-check" /> Est ipsa assumenda id facilis nesciunt placeat sed doloribus praesentium.</li>
                                </ul>
                                <p>
                                    Voluptas nisi in quia excepturi nihil voluptas nam et ut. Expedita omnis eum consequatur non. Sed in asperiores aut repellendus. Error quisquam ab maiores. Quibusdam sit in officia
                                </p>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                                <img src="img/details-2.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                                <h3>Corporis temporibus maiores provident</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <p>
                                    Inventore id enim dolor dicta qui et magni molestiae. Mollitia optio officia illum ut cupiditate eos autem. Soluta dolorum repellendus repellat amet autem rerum illum in. Quibusdam occaecati est nisi esse. Saepe aut dignissimos distinctio id enim.
                                </p>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-md-4" data-aos="fade-right">
                                <img src="img/details-3.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8 pt-5" data-aos="fade-up">
                                <h3>Sunt consequatur ad ut est nulla consectetur reiciendis animi voluptas</h3>
                                <p>Cupiditate placeat cupiditate placeat est ipsam culpa. Delectus quia minima quod. Sunt saepe odit aut quia voluptatem hic voluptas dolor doloremque.</p>
                                <ul>
                                    <li><i className="bi bi-check" /> Ullamco laboris nisi ut aliquip ex ea commodo consequat.</li>
                                    <li><i className="bi bi-check" /> Duis aute irure dolor in reprehenderit in voluptate velit.</li>
                                    <li><i className="bi bi-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                                </ul>
                                <p>
                                    Qui consequatur temporibus. Enim et corporis sit sunt harum praesentium suscipit ut voluptatem. Et nihil magni debitis consequatur est.
                                </p>
                                <p>
                                    Suscipit enim et. Ut optio esse quidem quam reiciendis esse odit excepturi. Vel dolores rerum soluta explicabo vel fugiat eum non.
                                </p>
                            </div>
                        </div>
                        <div className="row content">
                            <div className="col-md-4 order-1 order-md-2" data-aos="fade-left">
                                <img src="img/details-4.png" className="img-fluid" alt="" />
                            </div>
                            <div className="col-md-8 pt-5 order-2 order-md-1" data-aos="fade-up">
                                <h3>Quas et necessitatibus eaque impedit ipsum animi consequatur incidunt in</h3>
                                <p className="fst-italic">
                                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore
                                    magna aliqua.
                                </p>
                                <p>
                                    Ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
                                    velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
                                    culpa qui officia deserunt mollit anim id est laborum
                                </p>
                                <ul>
                                    <li><i className="bi bi-check" /> Et praesentium laboriosam architecto nam .</li>
                                    <li><i className="bi bi-check" /> Eius et voluptate. Enim earum tempore aliquid. Nobis et sunt consequatur. Aut repellat in numquam velit quo dignissimos et.</li>
                                    <li><i className="bi bi-check" /> Facilis ut et voluptatem aperiam. Autem soluta ad fugiat.</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </section>{/* End Details Section */}
                {/* ======= Gallery Section ======= */}
                <section id="gallery" className="gallery">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Gallery</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                    </div>
                    <div className="container-fluid" data-aos="fade-up">
                        <div className="gallery-slider swiper">
                            <div className="swiper-wrapper">
                                <div className="swiper-slide"><a href="img/gallery/gallery-1.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-1.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-2.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-2.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-3.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-3.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-4.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-4.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-5.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-5.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-6.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-6.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-7.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-7.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-8.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-8.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-9.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-9.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-10.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-10.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-11.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-11.png" className="img-fluid" alt="" /></a></div>
                                <div className="swiper-slide"><a href="img/gallery/gallery-12.png" className="gallery-lightbox" data-gall="gallery-carousel"><img src="img/gallery/gallery-12.png" className="img-fluid" alt="" /></a></div>
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>{/* End Gallery Section */}
                {/* ======= Testimonials Section ======= */}
                <section id="testimonials" className="testimonials section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Testimonials</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="testimonials-slider swiper" data-aos="fade-up" data-aos-delay={100}>
                            <div className="swiper-wrapper">
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src="img/testimonials/testimonials-1.jpg" className="testimonial-img" alt="" />
                                        <h3>Saul Goodman</h3>
                                        <h4>Ceo &amp; Founder</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Proin iaculis purus consequat sem cure digni ssim donec porttitora entum suscipit rhoncus. Accusantium quam, ultricies eget id, aliquam eget nibh et. Maecen aliquam, risus at semper.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src="img/testimonials/testimonials-2.jpg" className="testimonial-img" alt="" />
                                        <h3>Sara Wilsson</h3>
                                        <h4>Designer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Export tempor illum tamen malis malis eram quae irure esse labore quem cillum quid cillum eram malis quorum velit fore eram velit sunt aliqua noster fugiat irure amet legam anim culpa.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src="img/testimonials/testimonials-3.jpg" className="testimonial-img" alt="" />
                                        <h3>Jena Karlis</h3>
                                        <h4>Store Owner</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Enim nisi quem export duis labore cillum quae magna enim sint quorum nulla quem veniam duis minim tempor labore quem eram duis noster aute amet eram fore quis sint minim.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src="img/testimonials/testimonials-4.jpg" className="testimonial-img" alt="" />
                                        <h3>Matt Brandon</h3>
                                        <h4>Freelancer</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Fugiat enim eram quae cillum dolore dolor amet nulla culpa multos export minim fugiat minim velit minim dolor enim duis veniam ipsum anim magna sunt elit fore quem dolore labore illum veniam.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                                <div className="swiper-slide">
                                    <div className="testimonial-item">
                                        <img src="img/testimonials/testimonials-5.jpg" className="testimonial-img" alt="" />
                                        <h3>John Larson</h3>
                                        <h4>Entrepreneur</h4>
                                        <p>
                                            <i className="bx bxs-quote-alt-left quote-icon-left" />
                                            Quis quorum aliqua sint quem legam fore sunt eram irure aliqua veniam tempor noster veniam enim culpa labore duis sunt culpa nulla illum cillum fugiat legam esse veniam culpa fore nisi cillum quid.
                                            <i className="bx bxs-quote-alt-right quote-icon-right" />
                                        </p>
                                    </div>
                                </div>
                            </div>
                            <div className="swiper-pagination" />
                        </div>
                    </div>
                </section>{/* End Testimonials Section */}
                {/* ======= Pricing Section ======= */}
                <section id="pricing" className="pricing">
                    <div className="container">
                        <div className="section-title">
                            <h2>Pricing</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row no-gutters">
                            <div className="col-lg-4 box" data-aos="fade-right">
                                <h3>Free</h3>
                                <h4>$0<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                                    <li className="na"><i className="bx bx-x" /> <span>Pharetra massa massa ultricies</span></li>
                                    <li className="na"><i className="bx bx-x" /> <span>Massa ultricies mi quis hendrerit</span></li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                            <div className="col-lg-4 box featured" data-aos="fade-up">
                                <h3>Business</h3>
                                <h4>$29<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                            <div className="col-lg-4 box" data-aos="fade-left">
                                <h3>Developer</h3>
                                <h4>$49<span>per month</span></h4>
                                <ul>
                                    <li><i className="bx bx-check" /> Quam adipiscing vitae proin</li>
                                    <li><i className="bx bx-check" /> Nec feugiat nisl pretium</li>
                                    <li><i className="bx bx-check" /> Nulla at volutpat diam uteera</li>
                                    <li><i className="bx bx-check" /> Pharetra massa massa ultricies</li>
                                    <li><i className="bx bx-check" /> Massa ultricies mi quis hendrerit</li>
                                </ul>
                                <a href="#" className="get-started-btn">Get Started</a>
                            </div>
                        </div>
                    </div>
                </section>{/* End Pricing Section */}
                {/* ======= Frequently Asked Questions Section ======= */}
                <section id="faq" className="faq section-bg">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Frequently Asked Questions</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="accordion-list">
                            <ul>
                                <li data-aos="fade-up">
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" className="collapse" data-bs-target="#accordion-list-1">Non consectetur a erat nam at lectus urna duis? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="accordion-list-1" className="collapse show" data-bs-parent=".accordion-list">
                                        <p>
                                            Feugiat pretium nibh ipsum consequat. Tempus iaculis urna id volutpat lacus laoreet non curabitur gravida. Venenatis lectus magna fringilla urna porttitor rhoncus dolor purus non.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={100}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-2" className="collapsed">Feugiat scelerisque varius morbi enim nunc? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="accordion-list-2" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Dolor sit amet consectetur adipiscing elit pellentesque habitant morbi. Id interdum velit laoreet id donec ultrices. Fringilla phasellus faucibus scelerisque eleifend donec pretium. Est pellentesque elit ullamcorper dignissim. Mauris ultrices eros in cursus turpis massa tincidunt dui.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={200}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-3" className="collapsed">Dolor sit amet consectetur adipiscing elit? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="accordion-list-3" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Eleifend mi in nulla posuere sollicitudin aliquam ultrices sagittis orci. Faucibus pulvinar elementum integer enim. Sem nulla pharetra diam sit amet nisl suscipit. Rutrum tellus pellentesque eu tincidunt. Lectus urna duis convallis convallis tellus. Urna molestie at elementum eu facilisis sed odio morbi quis
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={300}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-4" className="collapsed">Tempus quam pellentesque nec nam aliquam sem et tortor consequat? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="accordion-list-4" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Molestie a iaculis at erat pellentesque adipiscing commodo. Dignissim suspendisse in est ante in. Nunc vel risus commodo viverra maecenas accumsan. Sit amet nisl suscipit adipiscing bibendum est. Purus gravida quis blandit turpis cursus in.
                                        </p>
                                    </div>
                                </li>
                                <li data-aos="fade-up" data-aos-delay={400}>
                                    <i className="bx bx-help-circle icon-help" /> <a data-bs-toggle="collapse" data-bs-target="#accordion-list-5" className="collapsed">Tortor vitae purus faucibus ornare. Varius vel pharetra vel turpis nunc eget lorem dolor? <i className="bx bx-chevron-down icon-show" /><i className="bx bx-chevron-up icon-close" /></a>
                                    <div id="accordion-list-5" className="collapse" data-bs-parent=".accordion-list">
                                        <p>
                                            Laoreet sit amet cursus sit amet dictum sit amet justo. Mauris vitae ultricies leo integer malesuada nunc vel. Tincidunt eget nullam non nisi est sit amet. Turpis nunc eget lorem dolor sed. Ut venenatis tellus in metus vulputate eu scelerisque.
                                        </p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>{/* End Frequently Asked Questions Section */}
                {/* ======= Contact Section ======= */}
                <section id="contact" className="contact">
                    <div className="container" data-aos="fade-up">
                        <div className="section-title">
                            <h2>Contact</h2>
                            <p>Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.</p>
                        </div>
                        <div className="row">
                            <div className="col-lg-6">
                                <div className="row">
                                    <div className="col-lg-6 info">
                                        <i className="bx bx-map" />
                                        <h4>Address</h4>
                                        <p>A108 Adam Street,<br />New York, NY 535022</p>
                                    </div>
                                    <div className="col-lg-6 info">
                                        <i className="bx bx-phone" />
                                        <h4>Call Us</h4>
                                        <p>+1 5589 55488 55<br />+1 5589 22548 64</p>
                                    </div>
                                    <div className="col-lg-6 info">
                                        <i className="bx bx-envelope" />
                                        <h4>Email Us</h4>
                                        <p>contact@example.com<br />info@example.com</p>
                                    </div>
                                    <div className="col-lg-6 info">
                                        <i className="bx bx-time-five" />
                                        <h4>Working Hours</h4>
                                        <p>Mon - Fri: 9AM to 5PM<br />Sunday: 9AM to 1PM</p>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6">
                                <form action="forms/contact.php" method="post" role="form" className="php-email-form" data-aos="fade-up">
                                    <div className="form-group">
                                        <input placeholder="Your Name" type="text" name="name" className="form-control" id="name" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input placeholder="Your Email" type="email" className="form-control" name="email" id="email" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <input placeholder="Subject" type="text" className="form-control" name="subject" id="subject" required />
                                    </div>
                                    <div className="form-group mt-3">
                                        <textarea placeholder="Message" className="form-control" name="message" rows={5} required defaultValue={""} />
                                    </div>
                                    <div className="my-3">
                                        <div className="loading">Loading</div>
                                        <div className="error-message" />
                                        <div className="sent-message">Your message has been sent. Thank you!</div>
                                    </div>
                                    <div className="text-center"><button type="submit">Send Message</button></div>
                                </form>
                            </div>
                        </div>
                    </div>
                </section>{/* End Contact Section */}
            </main>{/* End #main */}
            { }
        </div>
    );
}

export default HomePage;