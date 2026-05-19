mod menu;

use menu::{create_menu, handle_menu_event};

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
            create_menu(app.handle())?;
            Ok(())
        })

        .on_menu_event(|app, event| {
            handle_menu_event(app, event.id().as_ref());
        })

        .run(tauri::generate_context!())
        .expect("error while running app");
}
