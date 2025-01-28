package tarea03;

import misClases.*;
import javax.swing.*;
import java.awt.*;
import java.awt.event.*;

public class Principal {

    public static void main(String[] args) {

        JFrame frame = new JFrame("Gestion de Trabajadores");
        frame.setDefaultCloseOperation(JFrame.EXIT_ON_CLOSE);
        frame.setSize(800, 600);
        frame.setLayout(new BorderLayout());

        // Encabezado
        JLabel headerLabel = new JLabel("Gestion de Trabajadores", JLabel.CENTER);
        headerLabel.setFont(new Font("SansSerif", Font.BOLD, 18));
        headerLabel.setForeground(Color.DARK_GRAY);

        // Panel para la selección
        JPanel selectionPanel = new JPanel();
        selectionPanel.setLayout(new FlowLayout(FlowLayout.LEFT, 10, 10));
        selectionPanel.setBackground(new Color(240, 240, 240)); // Fondo gris claro

        // ComboBox para seleccionar tipo de trabajador
        String[] opciones = {"Directorio", "Operario"};
        JComboBox<String> tipoComboBox = new JComboBox<>(opciones);
        tipoComboBox.setFont(new Font("SansSerif", Font.PLAIN, 16));

        // Boton procesar informacion
        JButton procesarButton = new JButton("Procesar");
        procesarButton.setFont(new Font("SansSerif", Font.BOLD, 14));
        procesarButton.setBackground(new Color(200, 200, 200));
        procesarButton.setFocusPainted(false);

        // Añadir componentes al panel de selección
        selectionPanel.add(tipoComboBox);
        selectionPanel.add(procesarButton);

        // Área de texto para mostrar información
        JTextArea textArea = new JTextArea();
        textArea.setEditable(false);
        textArea.setFont(new Font("Monospaced", Font.PLAIN, 14));
        textArea.setBackground(new Color(245, 245, 245));
        textArea.setBorder(BorderFactory.createLineBorder(Color.GRAY, 1));
        JScrollPane scrollPane = new JScrollPane(textArea);

        procesarButton.addActionListener(new ActionListener() {
            @Override
            public void actionPerformed(ActionEvent e
            ) {

                Operario operario1 = new Operario(40, 80, 23456, "Luis Zapata", 25);
                Operario operario2 = new Operario(50, 100, 65432, "Luisa Zapata", 30);

                Directivo directivo1 = new Directivo(2, 34567, "Mario Martinez", 32);
                Directivo directivo2 = new Directivo(2, 76543, "Maria Martinez", 22);

                String seleccion = (String) tipoComboBox.getSelectedItem();

                textArea.setText("");

                if ("Directorio".equals(seleccion)) {
                    textArea.append("=== Trabajador de tipo Directivo ===\n");

                    textArea.append("Directivo 1:\n");
                    textArea.append("Nombre: " + directivo1.getNombre() + "\n");
                    textArea.append("Codigo: " + directivo1.getCodigo() + "\n");
                    textArea.append("Edad: " + directivo1.getEdad() + "\n");
                    textArea.append("Categoria: " + directivo1.getCategoria() + "\n");
                    textArea.append("Sueldo: " + directivo1.getSueldo() + "\n\n");

                    textArea.append("Directivo 2:\n");
                    textArea.append("Nombre: " + directivo2.getNombre() + "\n");
                    textArea.append("Codigo: " + directivo2.getCodigo() + "\n");
                    textArea.append("Edad: " + directivo2.getEdad() + "\n");
                    textArea.append("Categoria: " + directivo2.getCategoria() + "\n");
                    textArea.append("Sueldo: " + directivo2.getSueldo() + "\n\n");

                    textArea.append("¿Directivos tienen el mismo sueldo?:");
                    textArea.append(directivo1.equals(directivo2) ? "Si" : "No");

                } else if ("Operario".equals(seleccion)) {

                    textArea.append("=== Trabajador de tipo Operario ===\n");

                    textArea.append("Operario 1:\n");
                    textArea.append("Nombre: " + operario1.getNombre() + "\n");
                    textArea.append("Codigo: " + operario1.getCodigo() + "\n");
                    textArea.append("Edad: " + operario1.getEdad() + "\n");
                    textArea.append("Categoria: " + operario1.getHoras() + "\n");
                    textArea.append("Categoria: " + operario1.getTarifa() + "\n");
                    textArea.append("Sueldo: " + operario1.getSueldo() + "\n\n");

                    textArea.append("Operario 2:\n");
                    textArea.append("Nombre: " + operario2.getNombre() + "\n");
                    textArea.append("Codigo: " + operario2.getCodigo() + "\n");
                    textArea.append("Edad: " + operario2.getEdad() + "\n");
                    textArea.append("Categoria: " + operario2.getHoras() + "\n");
                    textArea.append("Categoria: " + operario2.getTarifa() + "\n");
                    textArea.append("Sueldo: " + operario2.getSueldo() + "\n\n");

                    textArea.append("¿Directivos tienen el mismo sueldo?:");
                    textArea.append(operario1.equals(operario2) ? "Si" : "No");

                }

            }
        });

        frame.add(headerLabel, BorderLayout.NORTH);
        frame.add(selectionPanel, BorderLayout.WEST);
        frame.add(scrollPane, BorderLayout.CENTER);

        frame.setVisible(true);
    }
}
