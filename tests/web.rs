extern crate game_of_life;
wasm_bindgen_test::wasm_bindgen_test_configure!(run_in_browser);
use game_of_life::Universe;
use rand::Rng;
use wasm_bindgen_test::wasm_bindgen_test;

#[cfg(test)]
pub fn input_spaceship() -> Universe {
    let mut universe = Universe::new();
    universe.set_width(6);
    universe.set_height(6);
    universe.set_cells(&[(1, 2), (2, 3), (3, 1), (3, 2), (3, 3)]);
    universe
}

#[cfg(test)]
pub fn expected_spaceship() -> Universe {
    let mut universe = Universe::new();
    universe.set_width(6);
    universe.set_height(6);
    universe.set_cells(&[(2, 1), (2, 3), (3, 2), (3, 3), (4, 2)]);
    universe
}

#[wasm_bindgen_test]
pub fn test_tick() {
    let mut input_universe = input_spaceship();
    let expected_universe = expected_spaceship();

    input_universe.tick();
    assert_eq!(&input_universe.get_cells(), &expected_universe.get_cells());
}
#[wasm_bindgen_test]
fn get_system_stable() {
    let mut universe = Universe::new();
    for _ in 0..10 {
        let mut cells = vec![];
        for _ in 0..10 {
            cells.push((
                rand::thread_rng().gen_range(0..60),
                rand::thread_rng().gen_range(0..60),
            ))
        }
        // .collect();
        universe.set_cells(&cells);
        universe.update_snapshot();
    }
    assert!(!universe.get_system_stable());
}
