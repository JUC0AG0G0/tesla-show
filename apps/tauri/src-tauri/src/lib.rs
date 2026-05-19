use tauri::menu::{MenuBuilder, SubmenuBuilder, MenuItemBuilder};
use tauri_plugin_opener::OpenerExt;

#[tauri::command]
fn greet(name: &str) -> String {
    format!("Hello, {}!", name)
}

#[cfg_attr(mobile, tauri::mobile_entry_point)]
pub fn run() {
    tauri::Builder::default()
        .plugin(tauri_plugin_opener::init())
        .plugin(tauri_plugin_dialog::init())
        .invoke_handler(tauri::generate_handler![greet])

        .setup(|app| {
            // =========================
            // FILE MENU
            // =========================
            let quit = MenuItemBuilder::new("Quit")
                .id("quit")
                .build(app)?;

            let file_menu = SubmenuBuilder::new(app, "File")
                .item(&quit)
                .build()?;

            // =========================
            // HELP MENU
            // =========================
            let help_item = MenuItemBuilder::new("Open Help")
                .id("help")
                .build(app)?;

            let help_menu = SubmenuBuilder::new(app, "Help")
                .item(&help_item)
                .build()?;

            // =========================
            // ROOT MENU
            // =========================
            let menu = MenuBuilder::new(app)
                .item(&file_menu)
                .item(&help_menu)
                .build()?;

            app.set_menu(menu)?;

            Ok(())
        })

        .on_menu_event(|app, event| {
            match event.id().as_ref() {
                "help" => {
                    let _ = app.opener().open_url(
                        "https://juc0ag0g0.github.io/tesla-show/",
                        None::<&str>,
                    );
                }

                "quit" => {
                    app.exit(0);
                }

                _ => {}
            }
        })

        .run(tauri::generate_context!())
        .expect("error while running app");
}
