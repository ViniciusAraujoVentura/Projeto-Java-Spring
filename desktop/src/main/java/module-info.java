module br.com.curso.desktop {
    requires javafx.controls;
    requires javafx.fxml;
    requires com.fasterxml.jackson.databind;
    requires java.net.http;

    opens br.com.curso.desktop to javafx.fxml, com.fasterxml.jackson.databind;
    exports br.com.curso.desktop;
}