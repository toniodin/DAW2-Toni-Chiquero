import java.util.Scanner;

public class JuegoDeDados implements Juego {
    int dado1, dado2;
    String jugador1;
    String jugador2;
    Scanner teclado;

    public JuegoDeDados() {
        teclado = new Scanner(System.in);
    }

    public void iniciar() {
        System.out.print("Ingrese el nombre del primer jugador:");
        jugador1 = teclado.nextLine();
        System.out.print("Ingrese el nombre del segundo jugador:");
        jugador2 = teclado.nextLine();
    }

    public void jugar() {
        dado1 = 1 + (int) (Math.random() * 6);
        dado2 = 1 + (int) (Math.random() * 6);
        System.out.println(jugador1 + " le salió el valor " + dado1);
        System.out.println(jugador2 + " le salió el valor " + dado2);
    }
/**
 * @throws funcion que lanza una excepcion
 */
    public void excepcion() {
    	if (dado1 <= 0 || dado2 <= 0)
            throw new RuntimeException("La edad debe ser positiva");
        this.dado1 = dado1;
    }

}