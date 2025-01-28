package misClases;

public class Operario extends Trabajador {
    
    private int horas;
    private int tarifa;
    
    public Operario(int horas, int tarifa, int codigo, String nombre, int edad) {
        super(codigo, nombre, edad);
        this.horas = horas;
        this.tarifa = tarifa;
    }
    
    // Setters
    public void setHoras(int horas) {
        this.horas = horas;
    }
    
    public void setTarifa(int tarifa) {
        this.tarifa = tarifa;
    }
    
    // Getters
    
    public int getHoras() {
        return horas;
    }
    
    public int getTarifa() {
        return tarifa;
    }
    
    public double getSueldo() {
        return (horas*tarifa);
    }

    @Override
    public String toString() {
        return "Operario {" + super.toString() + "horas=" + horas + ", tarifa=" + tarifa + '}';
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
        Operario other = (Operario) obj;
        return this.getSueldo() == other.getSueldo();
    } 
}
