package misClases;

public class Directivo extends Trabajador {
    
    private int categoria;
    
    public Directivo(int categoria, int codigo, String nombre, int edad) {
        super(codigo, nombre, edad);
        this.categoria = categoria;
    }
    
    // Setters
    public void setcategoria(int categoria) {
        this.categoria = categoria;
    }
    
    // Getters
    
    public int getCategoria() {
        return categoria;
    }
    
    public double getSueldo() {
        if (categoria == 1){
            return 5750.0;
        } else if (categoria == 2) {
            return 5250.0;
        } else if (categoria == 3) {
            return 4250.0;
        } else if (categoria == 4){
            return 4250.0;
        } else {
            return 0;
        }
    }

    @Override
    public String toString() {
        return "Direvtivo{" + super.toString() + "categoria=" + categoria + '}';
    } 
    
    @Override
    public boolean equals(Object obj) {
        if (this == obj) {
            return true;
        }
        if (obj == null) {
            return false;
        }
        if (getClass() != obj.getClass()) {
            return false;
        }
        Directivo other = (Directivo) obj;
        return this.getSueldo() == other.getSueldo();
    } 
}

