
export default function test() {

    return (
        <>
            <section class="home-header-container mb-5 position-relative" >
                <img src="./Images/restaurant.webp" id="home-header-img" class="img-fluid w-100" />

                <div class="home-header-text position-absolute top-50 start-50 translate-middle text-center text-white">
                    <h1 class="display-4">Snack Overflow</h1>
                    <p class="lead">Where coding meets cuisine!</p>
                </div>
            </section >

            <main class="container">
                <section class="highlighted-dishes text-center">
                    <h2 class="mb-4">Popular Dishes</h2>
                    <div class="row">

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="dish-item card h-100">
                                <img src="./Images/Byte-sized bites.webp" class="menu-item-highlight card-img-top" />
                                <div class="card-body">
                                    <h4>Byte-sized bites</h4>
                                    <p>Crispy chicken tenders served with a trio of dipping sauces: honey mustard, BBQ, and ranch.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="dish-item card h-100">
                                <img src="./Images/SQL-icious salmon.webp" class="menu-item-highlight card-img-top" />
                                <div class="card-body">
                                    <h4>SQL-icious Salmon</h4>
                                    <p>Grilled salmon filet with a honey mustard glaze, served with quinoa and steamed broccoli.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="dish-item card h-100">
                                <img src="./Images/SpaghettiCarbonara.webp" class="menu-item-highlight card-img-top" />
                                <div class="card-body">
                                    <h4>Spaghetti C#rbonara</h4>
                                    <p>Classic Italian carbonara with pancetta, egg, parmesan, and black pepper, tossed with spaghetti.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4 offset-lg-2">
                            <div class="dish-item card h-100">
                                <img src="./Images/BooleanBurger.webp" class="menu-item-highlight card-img-top" />
                                <div class="card-body">
                                    <h4>Boolean Burger</h4>
                                    <p>A plant-based burger with lettuce, tomato, pickles, and vegan aioli, served on a toasted bun with sweet potato fries.</p>
                                </div>
                            </div>
                        </div>

                        <div class="col-md-6 col-lg-4 mb-4">
                            <div class="dish-item card h-100">
                                <img src="./Images/RuntimeRibs.webp" class="menu-item-highlight card-img-top" />
                                <div class="card-body">
                                    <h4>Runtime Ribs</h4>
                                    <p>Slow-cooked BBQ ribs, fall-off-the-bone tender, served with coleslaw and cornbread.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>


                <section class="history-section my-5">
                    <h2 class="text-center mb-4">Our History</h2>
                    <div class="row align-items-center">
                        <div class="col-md-6">
                            <img src="./Images/history.webp" class="img-fluid mb-4 mb-md-0" />
                        </div>
                        <div class="col-md-6 text-md-center">
                            <p class="history-text">
                                Born from a love of code and a passion for culinary creativity, Snack Overflow is the brainchild of two software engineers turned food enthusiasts. After countless late-night coding sessions fueled by instant noodles, energy drinks, and the occasional pizza, they realized that the tech world needed a better dining experience. But this wouldn’t just be any restaurant—it would be the perfect fusion of their two great loves: food and technology.
                            </p>
                            <p class="history-text">
                                In 2023, Snack Overflow opened its doors to hungry coders, tech lovers, and foodies alike. The name, a playful nod to the infamous "stack overflow" error, reflects our belief that good food, like good code, should be innovative, satisfying, and occasionally a little cheeky.
                            </p>
                            <p class="history-text">
                                At Snack Overflow, the menu is just as quirky and exciting as the name suggests. From our "404: Fries Not Found" to the crowd-favorite "Byte-sized Bites," every dish is designed with a dash of creativity and a whole lot of flavor.
                            </p>
                        </div>
                    </div>
                </section>
            </main>
            </>
    )
}