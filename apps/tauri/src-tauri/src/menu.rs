use tauri::{
    AppHandle,
    menu::{
        MenuBuilder,
        MenuItemBuilder,
        SubmenuBuilder,
        PredefinedMenuItem,
    },
};

use tauri_plugin_opener::OpenerExt;

pub fn create_menu(app: &AppHandle) -> tauri::Result<()> {
    // ===== APP MENU =====
    let app_menu = SubmenuBuilder::new(app, "App")
        .item(&PredefinedMenuItem::about(app, None, None)?)
        .separator()
        .item(&PredefinedMenuItem::hide(app, None)?)
        .item(&PredefinedMenuItem::hide_others(app, None)?)
        .item(&PredefinedMenuItem::show_all(app, None)?)
        .separator()
        .item(&PredefinedMenuItem::quit(app, None)?)
        .build()?;

    // ===== FILE MENU =====
    let file_menu = SubmenuBuilder::new(app, "File")
        .item(&PredefinedMenuItem::close_window(app, None)?)
        .build()?;

    // ===== EDIT MENU (safe cross-platform set) =====
    let edit_menu = SubmenuBuilder::new(app, "Edit")
        .item(&PredefinedMenuItem::undo(app, None)?)
        .item(&PredefinedMenuItem::redo(app, None)?)
        .separator()
        .item(&PredefinedMenuItem::cut(app, None)?)
        .item(&PredefinedMenuItem::copy(app, None)?)
        .item(&PredefinedMenuItem::paste(app, None)?)
        .item(&PredefinedMenuItem::select_all(app, None)?)
        .build()?;

    // ===== VIEW MENU =====
    let view_menu = SubmenuBuilder::new(app, "View")
        .item(&PredefinedMenuItem::fullscreen(app, None)?)
        .build()?;

    // ===== WINDOW MENU (ONLY SAFE ITEMS) =====
    let window_menu = SubmenuBuilder::new(app, "Window")
        .item(&PredefinedMenuItem::minimize(app, None)?)
        .item(&PredefinedMenuItem::maximize(app, None)?)
        .build()?;

    // ===== HELP MENU =====
    let help_item = MenuItemBuilder::new("Open Help")
        .id("help")
        .build(app)?;

    let help_menu = SubmenuBuilder::new(app, "Help")
        .item(&help_item)
        .build()?;

    // ===== ROOT =====
    let menu = MenuBuilder::new(app)
        .item(&app_menu)
        .item(&file_menu)
        .item(&edit_menu)
        .item(&view_menu)
        .item(&window_menu)
        .item(&help_menu)
        .build()?;

    app.set_menu(menu)?;

    Ok(())
}

pub fn handle_menu_event(app: &AppHandle, event_id: &str) {
    match event_id {
        "help" => {
            let _ = app.opener().open_url(
                "https://juc0ag0g0.github.io/tesla-show/",
                None::<&str>,
            );
        }
        _ => {}
    }
}
