package misClases;

public class Trabajador {
    private int codigo;
    private String nombre;
    private int edad;
    
    public Trabajador(int codigo, String nombre, int edad) {
        this.codigo = codigo;
        this.nombre = nombre;
        this.edad = edad;
    }
    
    // Setters
    public void setCodigo(int codigo) {
        this.codigo = codigo;
    }
    
    public void setNombre(String nombre) {
        this.nombre = nombre;
    }
    
    public void setEdad(int edad) {
        this.edad = edad;
    }
    
    // Getters
    
    public int getCodigo() {
        return codigo;
    }
    
    public String getNombre() {
        return nombre;
    }
    
    public int getEdad() {
        return edad;
    }

    @Override
    public String toString() {
        return "Trabajador{" + "codigo=" + codigo + ", nombre=" + nombre + ", edad=" + edad + '}';
    } 
}
