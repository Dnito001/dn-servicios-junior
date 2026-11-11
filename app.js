
const PIN_ACCESO = "111"; 
const TECNICO_NOMBRE = "JUNIOR ALMIRON";
const AUTH_SESSION_KEY = "dn_junior_autenticado";
const STORAGE_KEY = "dn_junior_db_v2";
const DRIVE_URL_KEY = "dn_servicios_drive_url";

const DEFAULT_DRIVE_URL = "https://script.google.com/macros/s/AKfycbxezjx2ilDKOrdGQXrE3bHUO3cnMnMFDoDl3FJ7SX1xGTU-HmLXqWHrNB3h2IzcIrPF-g/exec";

// 287 REGISTROS HISTÓRICOS DE JUNIOR ALMIRÓN [ID, Fecha, Categoría, Marca, Modelo, Trabajo, Notas]
const RAW_DATOS_JUNIOR = [
  ["REP-001", "20/07/2026", "Smartphone", "Samsung", "Galaxy A06", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-002", "20/07/2026", "Smartphone", "Samsung", "Galaxy A34", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-003", "20/07/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-004", "20/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", "En DN Tecnología"],
  ["REP-005", "21/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Desbloqueo", ""],
  ["REP-006", "21/07/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Desbloqueo", ""],
  ["REP-007", "21/07/2026", "Smartphone", "Samsung", "Galaxy A02", "Cambio de pantalla", ""],
  ["REP-008", "22/07/2026", "Smartphone", "Samsung", "Galaxy A11", "Desbloqueo FRP", ""],
  ["REP-009", "22/07/2026", "Smartphone", "Apple", "iPhone 11 a iPhone 16", "Traspaso de datos", ""],
  ["REP-010", "22/07/2026", "Smartphone", "Motorola", "Moto E7i Power", "Cambio de pantalla", ""],
  ["REP-011", "22/07/2026", "Smartphone", "Samsung", "Galaxy J2 Pro", "Desbloqueo", ""],
  ["REP-012", "22/07/2026", "Smartphone", "Xiaomi", "Redmi Note 13", "Reparación de sensor", ""],
  ["REP-013", "22/07/2026", "Smartphone", "Samsung", "Galaxy A15", "Colocación de estuche y antiquiebre", "Accesorio"],
  ["REP-014", "25/07/2026", "Smartphone", "Xiaomi", "Redmi Note 12 Pro", "Cambio de pantalla", ""],
  ["REP-015", "25/07/2026", "Smartphone", "Samsung", "Galaxy A20s", "Desbloqueo", ""],
  ["REP-016", "25/07/2026", "Smartphone", "Samsung", "Galaxy A15", "Reparación de housing", ""],
  ["REP-017", "25/07/2026", "Smartphone", "Ulefone", "Armor 22", "Desbloqueo", ""],
  ["REP-018", "25/07/2026", "Laptop", "HP", "Laptop 15 pulgadas", "Reparación de bisagras", ""],
  ["REP-019", "27/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Reparación de botón y speaker", "Cliente de Derlis"],
  ["REP-020", "27/07/2026", "Almacenamiento", "Genérico", "Disco Duro HDD", "Recuperación de archivos", "Cliente de Junior"],
  ["REP-021", "28/07/2026", "Laptop", "HP", "Laptop HP", "Cambio de HDD a SSD, sistema y Office", ""],
  ["REP-022", "28/07/2026", "Smartphone", "Samsung", "Galaxy A53", "Cambio de pantalla", ""],
  ["REP-023", "29/07/2026", "Smartphone", "Apple", "iPhone 13 Pro", "Reparación de pantalla verde", "Ana"],
  ["REP-024", "29/07/2026", "PC / Software", "Genérico", "Sistema PC", "Soporte técnico de firma digital", ""],
  ["REP-025", "29/07/2026", "Infraestructura", "Genérico", "Instalación eléctrica", "Solución de parte eléctrica", ""],
  ["REP-026", "29/07/2026", "Tablet", "Samsung", "Galaxy Tab S6 Lite", "Cambio de pantalla", ""],
  ["REP-027", "30/07/2026", "Smartphone", "Samsung", "Galaxy M13", "Cambio de pantalla", ""],
  ["REP-028", "30/07/2026", "Smartphone", "Motorola", "Moto E13i", "Cambio de pantalla", ""],
  ["REP-029", "31/07/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-030", "31/07/2026", "Smartphone", "Apple", "iPhone 8 Plus", "Cambio de housing y reparación de carga", ""],
  ["REP-031", "01/08/2026", "Smartphone", "Apple", "iPhone XR", "Re-pegado de pantalla", ""],
  ["REP-032", "01/08/2026", "Smartphone", "Apple", "iPhone 8 Plus", "Cambio de cámara, flex de carga y micrófono", ""],
  ["REP-033", "01/08/2026", "Smartphone", "Samsung", "Galaxy A02s", "Reparación de botón", ""],
  ["REP-034", "01/08/2026", "Smartphone", "Samsung", "Galaxy A52", "Cambio de pantalla", ""],
  ["REP-035", "01/08/2026", "Smartphone", "Samsung", "Galaxy A01", "Cambio de pantalla", ""],
  ["REP-036", "10/08/2026", "Impresora", "Epson", "Impresora Epson", "Cambio de cartucho y configuración", "20.000 Gs"],
  ["REP-037", "11/08/2026", "PC / Redes", "Genérico", "PC Escritorio", "Optimización de PC lento y reparación WiFi", "Consultoría"],
  ["REP-038", "11/08/2026", "Smartphone", "Xiaomi", "Redmi Note 8", "Solución a problemas de reinicio", ""],
  ["REP-039", "11/08/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-040", "11/08/2026", "Smartphone", "Samsung", "Galaxy A23", "Re-pegado de pantalla", ""],
  ["REP-041", "11/08/2026", "Smartphone", "Xiaomi", "Redmi Note 13", "Cambio de batería", ""],
  ["REP-042", "11/08/2026", "Electrónica", "Genérico", "Lector de antena", "Reparación de ficha coaxial", ""],
  ["REP-043", "12/08/2026", "Smartphone", "Apple", "iPhone XR", "Cambio de pantalla", "Anotado como 12/02"],
  ["REP-044", "12/08/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Cambio de pantalla", "Anotado como 12/02"],
  ["REP-045", "13/08/2026", "Smartphone", "Xiaomi", "Redmi 12C", "Cambio de pantalla, pin de carga y desbrickeo", ""],
  ["REP-046", "13/08/2026", "Smartphone", "Samsung", "Galaxy A15", "Recuperación de archivos", ""],
  ["REP-047", "13/08/2026", "Smartphone", "Xiaomi", "Redmi A2", "Cambio de pantalla", ""],
  ["REP-048", "14/08/2026", "Smartphone", "Xiaomi", "Redmi 13C", "Cambio de pantalla", "Ana"],
  ["REP-049", "14/08/2026", "Tablet", "C-Idea", "Tablet C-Idea", "Reparación de pin de carga", ""],
  ["REP-050", "14/08/2026", "Smartphone", "Samsung", "Galaxy A34", "Reparación de táctil", ""],
  ["REP-051", "15/08/2026", "Smartphone", "Apple", "iPhone 12", "Limpieza de cámara", "Con servicio delivery"],
  ["REP-052", "15/08/2026", "Smartphone", "Samsung", "Galaxy A24", "Cambio de pantalla, batería y botón", "Ana"],
  ["REP-053", "15/08/2026", "Smartphone", "Samsung", "Galaxy A02s", "Cambio de pantalla", ""],
  ["REP-054", "15/08/2026", "Smartphone", "Samsung", "Galaxy A03 Core", "Cambio de pantalla, placa y pin de carga", ""],
  ["REP-055", "17/08/2026", "Smartphone", "Samsung", "Galaxy A20s", "Cambio de pin de carga", ""],
  ["REP-056", "17/08/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla, pin de carga y micrófono", "Derlis"],
  ["REP-057", "18/08/2026", "Smartphone", "Xiaomi", "Redmi a Redmi", "Traspaso de datos", ""],
  ["REP-058", "18/08/2026", "Smartphone", "Xiaomi", "Redmi A1", "Cambio de pin de carga", ""],
  ["REP-059", "19/08/2026", "PC / Software", "Genérico", "PC / Laptop", "Activación de paquete Office", ""],
  ["REP-060", "20/08/2026", "Smartphone", "Samsung", "Galaxy A01", "Cambio de pantalla", "Derlis"],
  ["REP-061", "20/08/2026", "Laptop", "HP", "Laptop 15 pulgadas", "Cambio de batería", ""],
  ["REP-062", "20/08/2026", "Smartphone", "Samsung", "Galaxy A50", "Cambio de pantalla", ""],
  ["REP-063", "20/08/2026", "Impresora", "Epson", "Serie L1200", "Cambio de rodillo de arrastre con fusor", ""],
  ["REP-064", "21/08/2026", "Tablet", "Samsung", "Galaxy Tab A8", "Reparación de flex de carga y housing", ""],
  ["REP-065", "21/08/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga y recuperación de datos", ""],
  ["REP-066", "21/08/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Cambio de pantalla", ""],
  ["REP-067", "21/08/2026", "PC / Redes", "Genérico", "PC Escritorio", "Cambio de IP y reconfiguración LAN Ethernet", "Contaduría"],
  ["REP-068", "21/08/2026", "Smartphone", "Xiaomi", "Redmi A1", "Cambio de pantalla", ""],
  ["REP-069", "21/08/2026", "Smartphone", "Xiaomi", "Redmi A1", "Cambio de pin de carga", ""],
  ["REP-070", "21/08/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", "Derlis"],
  ["REP-071", "21/08/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", ""],
  ["REP-072", "21/08/2026", "Smartphone", "Oppo", "A3x", "Recuperación de software", ""],
  ["REP-073", "24/08/2026", "Smartphone", "Tecno", "Spark Go 2024", "Cambio de pantalla", ""],
  ["REP-074", "24/08/2026", "Smartphone", "Samsung", "Galaxy A05", "Cambio de pantalla", ""],
  ["REP-075", "24/08/2026", "Smartphone", "Xiaomi", "Redmi Note 8", "Cambio de tapa trasera", ""],
  ["REP-076", "24/08/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Cambio de pantalla y desbloqueo", ""],
  ["REP-077", "25/08/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Limpieza por humedad y cambio de pantalla", ""],
  ["REP-078", "25/08/2026", "Laptop", "Asus", "VivoBook", "Solución a trackpad numérico", ""],
  ["REP-079", "26/08/2026", "Impresora", "HP", "Serie 2900", "Configuración de impresora en PC HP", ""],
  ["REP-080", "26/08/2026", "Smartphone", "Samsung", "Galaxy A04", "Cambio de batería", ""],
  ["REP-081", "26/08/2026", "Smartphone", "Samsung", "Galaxy A22", "Reparación de placa de carga, huella y pantalla", ""],
  ["REP-082", "26/08/2026", "Smartphone", "Xiaomi", "Redmi Note 12S", "Cambio de pantalla", ""],
  ["REP-083", "27/08/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de pantalla", ""],
  ["REP-084", "27/08/2026", "Audio / Parlante", "JBL", "Charge 4 Versión S", "Cambio de batería y reparación de pin de carga", ""],
  ["REP-085", "27/08/2026", "Smartphone", "Samsung", "Galaxy A04e", "Cambio de pantalla", ""],
  ["REP-086", "27/08/2026", "Smartphone", "Samsung", "Galaxy A12", "Reparación de botón power", ""],
  ["REP-087", "28/08/2026", "Smartphone", "Samsung", "Galaxy M13", "Re-pegado de pantalla", ""],
  ["REP-088", "28/08/2026", "Smartphone", "Xiaomi", "Redmi 10C", "Reparación de pin de carga y cambio de pantalla", ""],
  ["REP-089", "28/08/2026", "Impresora", "Epson", "TM-U220D", "Mantenimiento y reparación de engranajes", "Graciela"],
  ["REP-090", "28/08/2026", "Smartphone", "Xiaomi", "Redmi Note 14 Pro", "Cambio de cámara y base de visor", ""],
  ["REP-091", "29/08/2026", "Celular Básico", "Nokia", "Nokia 106", "Cambio de pin de carga", ""],
  ["REP-092", "29/08/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla", "Ana"],
  ["REP-093", "29/08/2026", "Impresora", "Epson", "LX-350", "Mantenimiento de impresora matricial", ""],
  ["REP-094", "29/08/2026", "Smartphone", "Xiaomi", "Mi 8 Lite", "Cambio de pantalla", "Ana"],
  ["REP-095", "01/09/2026", "Audio / Radio", "Megastar", "Radio Megastar", "Cambio de batería", ""],
  ["REP-096", "01/09/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-097", "01/09/2026", "Smartphone", "Samsung", "Galaxy A01", "Reparación de línea de carga", ""],
  ["REP-098", "02/09/2026", "Seguridad / Redes", "Genérico", "Cámaras WiFi (2 unidades)", "Instalación WiFi, eléctrica y tomacorriente", "2 fichas hembra y 7m cable"],
  ["REP-099", "03/09/2026", "Smartphone", "Samsung", "Galaxy A02", "Reparación de botón power y desbloqueo", ""],
  ["REP-100", "03/09/2026", "Smartphone", "Motorola", "Moto G42", "Reparación de sensor de carga", "Ana"],
  ["REP-101", "03/09/2026", "Smartphone", "Samsung", "Galaxy J7 Neo", "Reparación de pin de carga", "Ana"],
  ["REP-102", "03/09/2026", "Smartphone", "Samsung", "Galaxy A33", "Cambio de pantalla", ""],
  ["REP-103", "03/09/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla y desbloqueo", "Derlis"],
  ["REP-104", "03/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Reparación de botón power", ""],
  ["REP-105", "03/09/2026", "Smartphone", "Apple", "Android a iPhone", "Traspaso de datos", ""],
  ["REP-106", "03/09/2026", "Smartphone", "Apple", "iPhone 12", "Limpieza de pin de carga", ""],
  ["REP-107", "03/09/2026", "Smartphone", "Apple", "iPhone XS Max", "Limpieza de parlante y pin de carga", ""],
  ["REP-108", "04/09/2026", "Smartphone", "Apple", "iPhone 14 Pro Max", "Cambio de pantalla con trasplante de IC", ""],
  ["REP-109", "04/09/2026", "Smartphone", "Samsung", "Galaxy J7 Neo", "Recuperación de pin de carga", ""],
  ["REP-110", "05/09/2026", "Smartphone", "Motorola", "Moto G32", "Cambio de pantalla", ""],
  ["REP-111", "05/09/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-112", "07/09/2026", "Smartphone", "Samsung", "Galaxy A24", "Cambio de pin de carga", ""],
  ["REP-113", "07/09/2026", "Smartphone", "Samsung", "Galaxy S21 FE", "Reparación FPC pantalla y cambio FPC antena", ""],
  ["REP-114", "07/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Cambio de pantalla", ""],
  ["REP-115", "07/09/2026", "Smartphone", "Xiaomi", "Redmi Note 8", "Flasheo y desbloqueo", ""],
  ["REP-116", "07/09/2026", "Audio / Auricular", "Xiaomi", "Auricular Réplica Redmi", "Reparación de pin de carga", ""],
  ["REP-117", "08/09/2026", "Smartphone", "Apple", "iPhone XR", "Cambio de pantalla", ""],
  ["REP-118", "10/09/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de batería", ""],
  ["REP-119", "10/09/2026", "Smartphone", "Xiaomi", "Redmi 9", "Reparación de conector FPC", "Derlis"],
  ["REP-120", "14/09/2026", "Smartphone", "Samsung", "Galaxy A14", "Cambio de pantalla", ""],
  ["REP-121", "14/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Desbloqueo", ""],
  ["REP-122", "14/09/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", ""],
  ["REP-123", "14/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de flex power y volumen", ""],
  ["REP-124", "14/09/2026", "Smartphone", "Samsung", "Galaxy A20", "Cambio de pantalla", ""],
  ["REP-125", "14/09/2026", "Smartphone", "Samsung", "Galaxy A02s", "Cambio de pantalla", ""],
  ["REP-126", "15/09/2026", "Smartphone", "Xiaomi", "Redmi 9", "Cambio de tapa trasera", ""],
  ["REP-127", "15/09/2026", "Smartphone", "Apple", "iPhone 13 Pro", "Recuperación de fotos", ""],
  ["REP-128", "16/09/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-129", "16/09/2026", "Impresora", "Brother", "HL-1200", "Reparación de impresora", ""],
  ["REP-130", "18/09/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Cambio de pantalla", ""],
  ["REP-131", "18/09/2026", "Smartphone", "Tecno", "Spark 2024", "Cambio de pantalla", ""],
  ["REP-132", "19/09/2026", "Smartphone", "Tecno", "Spark", "Reparación de pin de carga", "Ana"],
  ["REP-133", "19/09/2026", "Smartphone", "Apple", "iPhone 11", "Retiro de tapa trasera", ""],
  ["REP-134", "21/09/2026", "Smartphone", "Xiaomi", "Redmi A3", "Cambio de pantalla", ""],
  ["REP-135", "21/09/2026", "Smartphone", "Apple", "iPhone 15 Pro", "Cambio de pantalla", ""],
  ["REP-136", "21/09/2026", "Celular Básico", "Nokia", "Nokia 110", "Cambio de pin de carga", ""],
  ["REP-137", "21/09/2026", "Smartphone", "Xiaomi", "Poco M5", "Cambio de pantalla", ""],
  ["REP-138", "21/09/2026", "Smartphone", "Xiaomi", "Redmi Note 12", "Reparación de conector FPC", ""],
  ["REP-139", "21/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Reparación de botón power", "Ana"],
  ["REP-140", "21/09/2026", "Infraestructura", "Genérico", "Instalación eléctrica", "Reparación de parte eléctrica", "Derlis"],
  ["REP-141", "22/09/2026", "Seguridad / Redes", "HiLook", "Cámara 360", "Adaptación de cable UTP con fuente", ""],
  ["REP-142", "23/09/2026", "Smartphone", "Xiaomi", "Redmi 9A", "Cambio de pantalla y flasheo", "Ana"],
  ["REP-143", "23/09/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Reparación de pin de carga", ""],
  ["REP-144", "23/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de botones y re-pegado de pantalla", ""],
  ["REP-145", "23/09/2026", "Smartphone", "Apple", "iPhone 15 Pro", "Cambio de pantalla con trasplante de IC", ""],
  ["REP-146", "23/09/2026", "Smartphone", "Samsung", "Galaxy A04", "Cambio de pantalla y flasheo", "Derlis"],
  ["REP-147", "23/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-148", "24/09/2026", "Smartphone", "Apple", "Galaxy A14 a iPhone 13 Pro", "Traspaso de datos", ""],
  ["REP-149", "24/09/2026", "Smartphone", "Xiaomi", "Redmi Note 8 Pro", "Cambio de pantalla", ""],
  ["REP-150", "24/09/2026", "Multimedia", "Genérico", "3 Dispositivos TV/Móvil", "Instalación de aplicación Flujo", ""],
  ["REP-151", "24/09/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Cambio de pantalla", ""],
  ["REP-152", "25/09/2026", "Smartphone", "Xiaomi", "Redmi A5", "Desbloqueo FRP", ""],
  ["REP-153", "25/09/2026", "Smartphone", "Apple", "iPhone 15 Pro", "Cambio y programación de pantalla", ""],
  ["REP-154", "25/09/2026", "Smartphone", "Apple", "iPhone 11", "Mantenimiento de pin de carga", ""],
  ["REP-155", "25/09/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Reparación de reinicio", ""],
  ["REP-156", "25/09/2026", "Smartphone", "Xiaomi", "Redmi 14C", "Cambio de pantalla", ""],
  ["REP-157", "26/09/2026", "Smartphone", "Genérico", "Placa de teléfono", "Recuperación de pistas y resoldado de pin", ""],
  ["REP-158", "26/09/2026", "Smartphone", "Samsung", "Galaxy S24 Plus", "Mantenimiento de pin de carga", ""],
  ["REP-159", "28/09/2026", "Celular Básico", "Nokia", "Nokia 110", "Cambio de pin de carga", ""],
  ["REP-160", "28/09/2026", "Smartphone", "Samsung", "Galaxy A02", "Cambio de pin de carga", ""],
  ["REP-161", "28/09/2026", "Smartphone", "Samsung", "Galaxy S8", "Cambio de flex de carga", ""],
  ["REP-162", "28/09/2026", "Smartphone", "Samsung", "Galaxy A02s", "Cambio de pantalla", ""],
  ["REP-163", "28/09/2026", "Smartphone", "Xiaomi", "Redmi Note 13", "Cambio de pantalla", ""],
  ["REP-164", "28/09/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga", "Honorio"],
  ["REP-165", "28/09/2026", "Smartphone", "Samsung", "Galaxy J6", "Cambio de pin de carga", ""],
  ["REP-166", "29/09/2026", "Smartphone", "Samsung", "Galaxy A03", "Cambio de pantalla", ""],
  ["REP-167", "29/09/2026", "Smartphone", "Samsung", "Galaxy S20 FE", "Cambio de pantalla", ""],
  ["REP-168", "29/09/2026", "Electrónica", "Toyota", "Control de vehículo", "Reparación de control Toyota", ""],
  ["REP-169", "29/09/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", "Honorio"],
  ["REP-170", "29/09/2026", "Smartphone", "Samsung", "Galaxy A55", "Reparación de placa de carga", ""],
  ["REP-171", "30/09/2026", "Smartphone", "Xiaomi", "Redmi 15C", "Cambio de pantalla", "Derlis"],
  ["REP-172", "30/09/2026", "PC / Laptop", "Genérico", "Computadora", "Cambio a disco SSD, instalación SO y activación", ""],
  ["REP-173", "30/09/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pin y flex de carga", ""],
  ["REP-174", "01/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-175", "01/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga", "Ever"],
  ["REP-176", "01/10/2026", "Smartphone", "Apple", "iPhone 6s", "Cambio de pantalla", "Honorio"],
  ["REP-177", "01/10/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", "Honorio"],
  ["REP-178", "01/10/2026", "Smartphone", "Samsung", "Galaxy A12", "Cambio de pantalla", "Derlis"],
  ["REP-179", "02/10/2026", "Tablet", "Xiaomi", "Redmi Pad 2", "Flasheo de software", ""],
  ["REP-180", "02/10/2026", "Smartphone", "Xiaomi", "Galaxy A25 a Redmi 15C", "Traspaso de datos y configuración", ""],
  ["REP-181", "02/10/2026", "Smartphone", "Samsung", "Galaxy A10", "Reparación de placa de carga, micrófono y power", ""],
  ["REP-182", "02/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de placa de carga", ""],
  ["REP-183", "03/10/2026", "Smartphone", "Samsung", "Galaxy A31", "Cambio de pantalla", ""],
  ["REP-184", "03/10/2026", "Smartphone", "Xiaomi", "Redmi Note 10S", "Cambio de pantalla", ""],
  ["REP-185", "03/10/2026", "Smartphone", "Xiaomi", "Redmi Note 12 Pro+", "Reparación de reinicio", ""],
  ["REP-186", "03/10/2026", "Smartphone", "Apple", "iPhone 12", "Cambio de batería", "Honorio"],
  ["REP-187", "05/10/2026", "Smartphone", "Samsung", "Galaxy A14 5G", "Cambio de pantalla y pin de carga", ""],
  ["REP-188", "05/10/2026", "Smartphone", "Samsung", "Galaxy A03", "Cambio de pin de carga", ""],
  ["REP-189", "05/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Reparación de micrófono", ""],
  ["REP-190", "05/10/2026", "Smartphone", "Samsung", "Galaxy A72", "Reparación de lector SIM", "Nancy"],
  ["REP-191", "05/10/2026", "Smartphone", "Umidigi", "Umidigi", "Adaptación de batería", ""],
  ["REP-192", "05/10/2026", "Smartphone", "Samsung", "Galaxy A34", "Cambio de pantalla", ""],
  ["REP-193", "06/10/2026", "Infraestructura", "Genérico", "Luces LED externas", "Cambio de luces LED", ""],
  ["REP-194", "06/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pin de carga", "Ana"],
  ["REP-195", "06/10/2026", "Smartphone", "Apple", "iPhone 15 Pro Max", "Cambio de pantalla con trasplante de IC", ""],
  ["REP-196", "06/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla y reparación de audio", ""],
  ["REP-197", "07/10/2026", "Audio / Radio", "Genérico", "Radio portátil", "Reparación de pin de carga y pistas", ""],
  ["REP-198", "07/10/2026", "Smartphone", "Samsung", "Galaxy A52", "Cambio de pantalla", "Honorio"],
  ["REP-199", "07/10/2026", "Smartphone", "Samsung", "Galaxy S24 Ultra", "Reparación de cámara", ""],
  ["REP-200", "07/10/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Cambio de tapa y flex power/volumen", ""],
  ["REP-201", "09/10/2026", "Smartphone", "Samsung", "Galaxy A72", "Reparación de FPC y cambio de pin de carga", ""],
  ["REP-202", "09/10/2026", "Smartphone", "Apple", "Galaxy S22 a iPhone 16 Pro Max", "Traspaso de datos", "Anotado como 18 Pro Max"],
  ["REP-203", "09/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-204", "12/10/2026", "Smartphone", "Samsung", "Galaxy A50", "Cambio de pantalla", ""],
  ["REP-205", "12/10/2026", "Smartphone", "Samsung", "Galaxy A15", "Ajuste y resoldado de conector FPC", ""],
  ["REP-206", "13/10/2026", "Smartphone", "Xiaomi", "Redmi 13C", "Cambio de pantalla y placa de carga", ""],
  ["REP-207", "13/10/2026", "Celular Básico", "Nokia", "Nokia 110", "Reparación de jack de audio 2.5", ""],
  ["REP-208", "13/10/2026", "Infraestructura", "Genérico", "Luminaria LED", "Colocación de luz LED", ""],
  ["REP-209", "13/10/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla", ""],
  ["REP-210", "14/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", "Honorio"],
  ["REP-211", "14/10/2026", "Smartphone", "Tecno", "Spark 2023", "Cambio de pantalla", ""],
  ["REP-212", "14/10/2026", "Smartphone", "Xiaomi", "Redmi Note 11 Pro+", "Cambio de batería", ""],
  ["REP-213", "14/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-214", "14/10/2026", "Smartphone", "Samsung", "Galaxy A54", "Reparación de pin de carga", "Honorio"],
  ["REP-215", "14/10/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Cambio de pantalla", ""],
  ["REP-216", "15/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-217", "15/10/2026", "Smartphone", "Xiaomi", "Redmi 13C", "Reparación de conector FPC (no cargaba)", "Honorio"],
  ["REP-218", "15/10/2026", "Smartphone", "Apple", "iPhone 13 a iPhone 16", "Traspaso de datos", ""],
  ["REP-219", "16/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", "Honorio"],
  ["REP-220", "16/10/2026", "Smartphone", "Xiaomi", "Redmi Note 8 Pro", "Reparación de botón power y volumen", ""],
  ["REP-221", "16/10/2026", "Smartphone", "Samsung", "Galaxy A52", "Ajuste de pin de carga y parlante", "Ana"],
  ["REP-222", "16/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", ""],
  ["REP-223", "16/10/2026", "Smartphone", "Samsung", "Galaxy A16", "Cambio de pantalla", ""],
  ["REP-224", "16/10/2026", "PC / Software", "Genérico", "PC / Laptop", "Actualización de drivers y activación Office 365", ""],
  ["REP-225", "17/10/2026", "Smartphone", "Honor", "X5b", "Cambio de pantalla", ""],
  ["REP-226", "17/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-227", "17/10/2026", "Smartphone", "Apple", "iPhone 11", "Limpieza de cámara y sellado de pantalla", ""],
  ["REP-228", "19/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-229", "19/10/2026", "Smartphone", "Samsung", "Galaxy A05", "Cambio de pantalla", "Ana"],
  ["REP-230", "19/10/2026", "Smartphone", "Apple", "iPhone 13", "Cambio de pantalla con IC y tapa trasera", ""],
  ["REP-231", "19/10/2026", "Smartphone", "Samsung", "Galaxy A32", "Cambio de pantalla", ""],
  ["REP-232", "19/10/2026", "Smartphone", "Samsung", "Galaxy A21s", "Cambio de pantalla", "Honorio"],
  ["REP-233", "20/10/2026", "Smartphone", "Samsung", "Galaxy M12", "Cambio de pantalla", ""],
  ["REP-234", "20/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", "Ever"],
  ["REP-235", "20/10/2026", "Smartphone", "Apple", "iPhone 12 Pro", "Revisión de pantalla y fallo de apagado", ""],
  ["REP-236", "21/10/2026", "Smartphone", "Realme", "C65", "Limpieza y mantenimiento general", ""],
  ["REP-237", "21/10/2026", "Smartphone", "Samsung", "Galaxy A53", "Limpieza y mantenimiento general", ""],
  ["REP-238", "21/10/2026", "Smartphone", "Samsung", "Galaxy S20 FE", "Cambio de pantalla", "Ana"],
  ["REP-239", "21/10/2026", "Smartphone", "Xiaomi", "Redmi Note 10", "Cambio de pantalla", ""],
  ["REP-240", "21/10/2026", "Celular Básico", "Nokia", "Nokia", "Cambio de pin de carga", "Ana"],
  ["REP-241", "21/10/2026", "Smartphone", "Samsung", "Galaxy A03 Core", "Cambio de pantalla y pin de carga", ""],
  ["REP-242", "22/10/2026", "Seguridad / Redes", "Genérico", "Red de internet", "Verificación y solución de internet", "Hospital"],
  ["REP-243", "22/10/2026", "Smartphone", "Apple", "iPhone 13 Pro", "Cambio de housing, pantalla con IC y batería", "Ña Graciela"],
  ["REP-244", "23/10/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de pantalla", "Anotado como 2023"],
  ["REP-245", "23/10/2026", "Smartphone", "Samsung", "Galaxy A33", "Cambio de pantalla", "Anotado como 2023"],
  ["REP-246", "23/10/2026", "PC / Software", "Genérico", "PC / Laptop", "Activación de paquete Office", "Anotado como 2023"],
  ["REP-247", "23/10/2026", "Smartphone", "Samsung", "Galaxy A20s", "Cambio de firmware y desbloqueo", "Anotado como 2023"],
  ["REP-248", "23/10/2026", "Tablet", "C-Idea", "Tablet C-Idea", "Adaptación de pin de carga", "Anotado como 2023"],
  ["REP-249", "26/10/2026", "Smartphone", "Apple", "iPhone 13 Pro Max", "Cambio de tapa y batería con reprogramación", ""],
  ["REP-250", "26/10/2026", "Smartphone", "Samsung", "Galaxy A50", "Reparación de reinicio", ""],
  ["REP-251", "26/10/2026", "Seguridad / Redes", "Imou", "Cámara IP", "Instalación de cámara en poste", ""],
  ["REP-252", "27/10/2026", "Smartphone", "Samsung", "Galaxy A20s", "Cambio de pantalla", ""],
  ["REP-253", "27/10/2026", "Audio / Parlante", "JBL", "Charge 5", "Cambio de placa de carga", ""],
  ["REP-254", "27/10/2026", "Smartphone", "Apple", "iPhone 11", "Cambio de pantalla", ""],
  ["REP-255", "28/10/2026", "Tablet", "Amazon", "Fire", "Cambio de pin de carga", ""],
  ["REP-256", "28/10/2026", "Audio / Parlante", "JBL", "Grip", "Reparación de puerto de carga", ""],
  ["REP-257", "29/10/2026", "Smartphone", "Samsung", "Galaxy A04e", "Cambio de batería y placa de carga", ""],
  ["REP-258", "29/10/2026", "Smartphone", "Samsung", "Galaxy A03s", "Cambio de pantalla", ""],
  ["REP-259", "29/10/2026", "Smartphone", "Samsung", "Galaxy A03s", "Cambio de pantalla y desbloqueo", "Derlis"],
  ["REP-260", "29/10/2026", "Smartphone", "Samsung", "Galaxy A30s", "Cambio de housing y solución de audio", ""],
  ["REP-261", "30/10/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-262", "30/10/2026", "Smartphone", "Samsung", "Galaxy A04e", "Cambio de pantalla", ""],
  ["REP-263", "30/10/2026", "Smartphone", "Samsung", "Galaxy A26", "Flasheo de software", ""],
  ["REP-264", "30/10/2026", "Smartphone", "Xiaomi", "Redmi Note 12S", "Cambio de batería", "Ana"],
  ["REP-265", "30/10/2026", "Audio / Parlante", "JBL", "Charge 3", "Cambio de batería", ""],
  ["REP-266", "30/10/2026", "Smartphone", "Motorola", "Moto E7i", "Cambio de pin de carga", ""],
  ["REP-267", "30/10/2026", "Smartphone", "Samsung", "Galaxy A30s", "Cambio de pin de carga", ""],
  ["REP-268", "30/10/2026", "Smartphone", "Realme", "8i", "Solución a apagado de pantalla", "Derlis"],
  ["REP-269", "31/10/2026", "Smartphone", "Samsung", "Galaxy A15", "Cambio de pantalla", "Honorio"],
  ["REP-270", "31/10/2026", "Smartphone", "Xiaomi", "Redmi Note 9", "Solución a reinicio, audio y cambio flex carga", ""],
  ["REP-271", "31/10/2026", "Smartphone", "Samsung", "Galaxy S21 FE", "Solución a carga y señal", ""],
  ["REP-272", "31/10/2026", "Smartphone", "Honor", "X7b", "Cambio de pantalla y pin de carga", ""],
  ["REP-273", "31/10/2026", "Smartphone", "Samsung", "Galaxy A31", "Cambio de pin de carga y botón power", ""],
  ["REP-274", "31/10/2026", "Smartphone", "Samsung", "Galaxy A50", "Cambio de pantalla y reparación de IC de carga", ""],
  ["REP-275", "31/10/2026", "Smartphone", "Samsung", "Galaxy S21 FE", "Cambio de batería y reparación de carga húmeda", ""],
  ["REP-276", "04/11/2026", "Smartphone", "Realme", "C11", "Cambio de pantalla", ""],
  ["REP-277", "04/11/2026", "Smartphone", "Samsung", "Galaxy A03", "Cambio de pantalla", ""],
  ["REP-278", "05/11/2026", "Smartphone", "Motorola", "Moto G15", "Cambio de pantalla", ""],
  ["REP-279", "05/11/2026", "Smartphone", "TCL", "605", "Limpieza por humedad, resoldado y pantalla", ""],
  ["REP-280", "05/11/2026", "Smartphone", "Xiaomi", "Redmi Note 11", "Cambio de pantalla y desbloqueo FRP", "Derlis"],
  ["REP-281", "05/11/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla y desbloqueo FRP", "A13"],
  ["REP-282", "06/11/2026", "Smartphone", "Samsung", "Galaxy A23", "Cambio de pantalla", ""],
  ["REP-283", "07/11/2026", "Smartphone", "Samsung", "Galaxy A03 Core", "Cambio de pantalla, visor de cámara y FRP", "Derlis"],
  ["REP-284", "07/11/2026", "Smartphone", "Samsung", "Huawei Y9 2019 a Galaxy A03s", "Traspaso de datos", ""],
  ["REP-285", "07/11/2026", "Smartphone", "Samsung", "Galaxy A13", "Cambio de pantalla", ""],
  ["REP-286", "07/11/2026", "Smartphone", "Huawei", "Y9 2019", "Cambio de pantalla y flasheo", "Derlis"],
  ["REP-287", "07/11/2026", "Smartphone", "Samsung", "Galaxy A52", "Ajuste de conector FPC", ""]
];

function deducirIntervencion(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const lista = [];
  if (t.includes("pantalla") || t.includes("táctil") || t.includes("display") || t.includes("módulo")) lista.push("Cambio de Pantalla / Módulo");
  if (t.includes("pin") || t.includes("puerto de carga") || t.includes("placa de carga") || t.includes("línea de carga") || t.includes("flex de carga") || t.includes("flex carga")) lista.push("Pin de Carga / Placa de Carga");
  if (t.includes("batería") || t.includes("bateria") || t.includes("tapa") || t.includes("housing") || t.includes("botón") || t.includes("boton") || t.includes("botones") || t.includes("bisagra") || t.includes("cámara") || t.includes("flex power")) lista.push("Cambio de Batería / Flex / Carcasa");
  if (t.includes("desbloqueo") || t.includes("frp") || t.includes("flasheo") || t.includes("firmware") || t.includes("desbrickeo") || t.includes("cuentas") || t.includes("iniciar")) lista.push("Desbloqueo / FRP / Flasheo");
  if (t.includes("fpc") || t.includes("ic") || t.includes("pistas") || t.includes("resoldado") || t.includes("reinicio") || t.includes("sensor") || t.includes("micrófono") || t.includes("audio") || t.includes("señal") || t.includes("no encendía") || t.includes("no encendia")) lista.push("Microelectrónica / Placa / FPC");
  if (t.includes("limpieza") || t.includes("mantenimiento") || t.includes("humedad") || t.includes("cartucho") || t.includes("cabezal") || t.includes("almohadilla")) lista.push("Mantenimiento Físico / Limpieza");
  if (t.includes("traspaso") || t.includes("pasar datos") || t.includes("pasar todos los datos") || t.includes("sacar datos") || t.includes("recuperación") || t.includes("office") || t.includes("ssd") || t.includes("disco") || t.includes("sistema") || t.includes("software") || t.includes("flujo") || t.includes("actualizar")) lista.push("Software / Traspaso de Datos / Backup");
  if (t.includes("eléctrica") || t.includes("wifi") || t.includes("utp") || t.includes("ethernet") || t.includes("internet") || t.includes("led")) lista.push("Instalación / Redes / Electricidad");
  return lista.length > 0 ? lista.join(" + ") : "Reemplazo de Repuesto / Hardware";
}

function deducirRepuestos(trabajo) {
  const t = (trabajo || "").toLowerCase();
  const rep = [];
  if (t.includes("cambio de pantalla") || t.includes("y pantalla")) rep.push("Módulo de Pantalla");
  if (t.includes("cambio de pin") || t.includes("pin de carga")) rep.push("Pin de Carga");
  if (t.includes("placa de carga")) rep.push("Placa de Carga");
  if (t.includes("batería") || t.includes("bateria")) rep.push("Batería");
  if (t.includes("tapa")) rep.push("Tapa Trasera");
  if (t.includes("housing")) rep.push("Housing / Carcasa");
  if (t.includes("ssd") || t.includes("cambiar disco")) rep.push("Disco SSD");
  if (t.includes("cabezal")) rep.push("Cabezal");
  if (t.includes("almohadilla")) rep.push("Almohadillas");
  if (t.includes("flex")) rep.push("Cable Flex");
  return rep.length > 0 ? rep.join(" + ") : "Ninguno";
}

const DATOS_MAESTROS = RAW_DATOS_JUNIOR.map(([id, fecha, categoria, marca, modelo, trabajo, notas]) => ({
  id,
  fecha,
  categoria,
  marca,
  modelo,
  intervencion: deducirIntervencion(trabajo),
  trabajo,
  repuestos: deducirRepuestos(trabajo),
  estado: "Entregado",
  notas,
  tecnico: TECNICO_NOMBRE
}));

let servicios = [];
let loteTemporal = [];
let driveUrl = localStorage.getItem(DRIVE_URL_KEY) || DEFAULT_DRIVE_URL;

function normalizarFecha(f) {
  if (!f) return "";
  const str = String(f).trim();
  if (str.includes("T")) {
    const soloFecha = str.split("T")[0];
    const partes = soloFecha.split("-");
    if (partes.length === 3) return `${partes[2]}/${partes[1]}/${partes[0]}`;
  }
  return str;
}

function inicializarIconos() {
  if (window.lucide && typeof lucide.createIcons === "function") {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn("Lucide:", e);
    }
  }
}

document.addEventListener("DOMContentLoaded", () => {
  inicializarIconos();
  configurarSeguridad();
  configurarEventos();
});

function normalizarRegistros(lista) {
  return lista.map((item) => {
    const trabajoLimpio = (item.trabajo || "").replace(/Ajuste reflux de conector FPC/gi, "Ajuste y resoldado de conector FPC");
    const inter = item.intervencion ? item.intervencion.replace(/\/ Reflux/gi, "").trim() : deducirIntervencion(trabajoLimpio);
    return {
      id: item.id,
      fecha: normalizarFecha(item.fecha),
      categoria: item.categoria || "Smartphone",
      marca: item.marca || "Genérico",
      modelo: item.modelo || "-",
      intervencion: inter,
      trabajo: trabajoLimpio,
      repuestos: item.repuestos || deducirRepuestos(trabajoLimpio),
      estado: item.estado || "Entregado",
      notas: (item.notas || "").trim(),
      tecnico: TECNICO_NOMBRE
    };
  });
}

function configurarSeguridad() {
  const pantallaLogin = document.getElementById("pantalla-login");
  const appContenido = document.getElementById("app-contenido");
  const formLogin = document.getElementById("form-login");
  const inpPass = document.getElementById("inp-password");
  const errorLogin = document.getElementById("error-login");

  const desbloquear = () => {
    pantallaLogin.style.display = "none";
    appContenido.classList.remove("hidden");
    appContenido.style.display = "flex";
    cargarBaseDeDatos();
    inicializarIconos();
  };

  if (sessionStorage.getItem(AUTH_SESSION_KEY) === "true") {
    desbloquear();
  }

  formLogin.addEventListener("submit", (e) => {
    e.preventDefault();
    if (inpPass.value.trim() === PIN_ACCESO) {
      sessionStorage.setItem(AUTH_SESSION_KEY, "true");
      errorLogin.classList.add("hidden");
      inpPass.value = "";
      desbloquear();
    } else {
      errorLogin.classList.remove("hidden");
      inpPass.value = "";
      inpPass.focus();
    }
  });

  const bloquearSistema = () => {
    sessionStorage.removeItem(AUTH_SESSION_KEY);
    appContenido.classList.add("hidden");
    appContenido.style.display = "none";
    pantallaLogin.style.display = "flex";
    inpPass.focus();
  };

  const btnBloquear = document.getElementById("btn-bloquear");
  const btnBloquearMovil = document.getElementById("btn-bloquear-movil");
  if (btnBloquear) btnBloquear.addEventListener("click", bloquearSistema);
  if (btnBloquearMovil) btnBloquearMovil.addEventListener("click", bloquearSistema);
}

function cargarBaseDeDatos() {
  const guardados = localStorage.getItem(STORAGE_KEY);
  if (guardados) {
    try {
      const parsed = JSON.parse(guardados);
      servicios = normalizarRegistros(fusionarConMaestros(parsed));
    } catch (e) {
      servicios = normalizarRegistros([...DATOS_MAESTROS]);
    }
  } else {
    servicios = normalizarRegistros([...DATOS_MAESTROS]);
  }
  guardarLocal();

  if (driveUrl) {
    localStorage.setItem(DRIVE_URL_KEY, driveUrl);
    actualizarBadgeDrive(true);
    sincronizarDesdeDrive();
  }

  poblarSelectores();
  aplicarFiltros();
}

function fusionarConMaestros(listaEntrante) {
  const mapa = new Map();
  DATOS_MAESTROS.forEach((m) => mapa.set(m.id, m));
  listaEntrante.forEach((item) => {
    const idStr = String(item.id || "").toUpperCase();
    if (idStr.startsWith("REP-")) {
      mapa.set(idStr, item);
    }
  });
  return Array.from(mapa.values()).sort((a, b) => {
    const numA = parseInt(String(a.id).replace(/\D/g, "")) || 0;
    const numB = parseInt(String(b.id).replace(/\D/g, "")) || 0;
    return numA - numB;
  });
}

function guardarLocal() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(servicios));
}

function obtenerIntervencionesUnicas() {
  const conjunto = new Set();
  servicios.forEach((s) => {
    String(s.intervencion || "")
      .split("+")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((p) => conjunto.add(p));
  });
  return [...conjunto].sort();
}

function poblarSelectores() {
  const selCat = document.getElementById("filtro-categoria");
  const selMarca = document.getElementById("filtro-marca");
  const selInt = document.getElementById("filtro-intervencion");
  const selFecha = document.getElementById("filtro-fecha");

  if (!selCat || !selMarca || !selInt || !selFecha) return;

  const valCat = selCat.value;
  const valMarca = selMarca.value;
  const valInt = selInt.value;
  const valFecha = selFecha.value;

  const categorias = [...new Set(servicios.map((s) => s.categoria))].sort();
  const marcas = [...new Set(servicios.map((s) => s.marca))].sort();
  const intervenciones = obtenerIntervencionesUnicas();
  const fechas = [...new Set(servicios.map((s) => s.fecha))];

  selCat.innerHTML = '<option value="">Todas las categorías</option>' + categorias.map((c) => `<option value="${c}">${c}</option>`).join("");
  selMarca.innerHTML = '<option value="">Todas las marcas</option>' + marcas.map((m) => `<option value="${m}">${m}</option>`).join("");
  selInt.innerHTML = '<option value="">Todas las intervenciones</option>' + intervenciones.map((i) => `<option value="${i}">${i}</option>`).join("");
  selFecha.innerHTML = '<option value="">Todas las fechas</option>' + fechas.map((f) => `<option value="${f}">${f}</option>`).join("");

  selCat.value = valCat;
  selMarca.value = valMarca;
  selInt.value = valInt;
  selFecha.value = valFecha;
}

function aplicarFiltros() {
  const inpTexto = document.getElementById("filtro-texto");
  const selCat = document.getElementById("filtro-categoria");
  const selMarca = document.getElementById("filtro-marca");
  const selInt = document.getElementById("filtro-intervencion");
  const selFecha = document.getElementById("filtro-fecha");

  if (!inpTexto || !selCat || !selMarca || !selInt || !selFecha) return;

  const texto = inpTexto.value.toLowerCase().trim();
  const cat = selCat.value;
  const marca = selMarca.value;
  const intervencion = selInt.value;
  const fecha = selFecha.value;

  const filtrados = servicios.filter((item) => {
    const coincideTexto =
      !texto ||
      item.id.toLowerCase().includes(texto) ||
      item.modelo.toLowerCase().includes(texto) ||
      item.trabajo.toLowerCase().includes(texto) ||
      (item.notas || "").toLowerCase().includes(texto) ||
      item.marca.toLowerCase().includes(texto);

    const coincideCat = !cat || item.categoria === cat;
    const coincideMarca = !marca || item.marca === marca;
    const coincideInt = !intervencion || item.intervencion.includes(intervencion);
    const coincideFecha = !fecha || item.fecha === fecha;

    return coincideTexto && coincideCat && coincideMarca && coincideInt && coincideFecha;
  });

  renderizarVista(filtrados);
  actualizarKPIs(filtrados);
}

function obtenerColorBadge(categoria) {
  if (categoria.includes("Smartphone") || categoria.includes("Celular")) return "bg-teal-100 text-teal-800 border-teal-200";
  if (categoria.includes("Tablet")) return "bg-sky-100 text-sky-800 border-sky-200";
  if (categoria.includes("Impresora")) return "bg-emerald-100 text-emerald-800 border-emerald-200";
  if (categoria.includes("Laptop") || categoria.includes("PC")) return "bg-amber-100 text-amber-800 border-amber-200";
  if (categoria.includes("Audio")) return "bg-purple-100 text-purple-800 border-purple-200";
  return "bg-slate-100 text-slate-700 border-slate-200";
}

function renderizarVista(lista) {
  const tbody = document.getElementById("tabla-body");
  const listaMovil = document.getElementById("lista-movil");
  const contador = document.getElementById("contador-tabla");

  if (contador) contador.textContent = `Mostrando ${lista.length} registros`;

  if (lista.length === 0) {
    const vacioHTML = `<div class="py-10 text-center text-slate-500 text-sm">No se encontraron servicios con los filtros seleccionados.</div>`;
    if (tbody) tbody.innerHTML = `<tr><td colspan="9">${vacioHTML}</td></tr>`;
    if (listaMovil) listaMovil.innerHTML = vacioHTML;
    return;
  }

  const invertidos = [...lista].reverse();

  if (listaMovil) {
    listaMovil.innerHTML = invertidos
      .map(
        (item) => `
        <div class="p-4 space-y-2 hover:bg-slate-50">
          <div class="flex items-center justify-between">
            <div class="flex items-center gap-2">
              <span class="font-bold text-teal-700 text-sm">${item.id}</span>
              <span class="text-xs text-slate-500">· ${item.fecha}</span>
            </div>
            <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 p-1">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </div>
          <div class="flex flex-wrap items-center justify-between gap-2">
            <p class="font-bold text-slate-900 text-sm">${item.marca} <span class="font-normal text-slate-500">· ${item.modelo}</span></p>
            <span class="text-[11px] font-semibold px-2 py-0.5 rounded-md border ${obtenerColorBadge(item.categoria)}">
              ${item.categoria}
            </span>
          </div>
          <p class="text-xs font-medium text-teal-800">${item.intervencion}</p>
          <p class="text-xs text-slate-700 bg-slate-50 p-2.5 rounded-lg border border-slate-200/80">${item.trabajo}</p>
          <div class="flex flex-wrap items-center justify-between text-xs text-slate-500 pt-1 gap-2">
            <span><strong>Insumos:</strong> ${item.repuestos || "Ninguno"}</span>
            <span class="text-teal-800 font-semibold">${item.notas || "-"}</span>
          </div>
        </div>
      `
      )
      .join("");
  }

  if (tbody) {
    tbody.innerHTML = invertidos
      .map(
        (item) => `
        <tr class="hover:bg-slate-50 transition">
          <td class="py-3 px-4 font-bold text-teal-700 whitespace-nowrap">${item.id}</td>
          <td class="py-3 px-4 text-slate-600 whitespace-nowrap">${item.fecha}</td>
          <td class="py-3 px-4">
            <span class="inline-block text-xs font-semibold px-2.5 py-1 rounded-md border ${obtenerColorBadge(item.categoria)}">
              ${item.categoria}
            </span>
          </td>
          <td class="py-3 px-4">
            <div class="font-bold text-slate-900">${item.marca}</div>
            <div class="text-xs text-slate-500">${item.modelo}</div>
          </td>
          <td class="py-3 px-4 text-xs font-medium text-slate-700 max-w-xs">${item.intervencion}</td>
          <td class="py-3 px-4 text-slate-800 max-w-xs">${item.trabajo}</td>
          <td class="py-3 px-4 text-xs text-slate-600">${item.repuestos || "Ninguno"}</td>
          <td class="py-3 px-4 text-xs font-semibold text-teal-800">${item.notas || "-"}</td>
          <td class="py-3 px-4 text-center">
            <button onclick="eliminarServicio('${item.id}')" class="text-slate-400 hover:text-rose-600 transition p-1" title="Eliminar registro">
              <i data-lucide="trash-2" class="w-4 h-4"></i>
            </button>
          </td>
        </tr>
      `
      )
      .join("");
  }

  inicializarIconos();
}

function calcularModa(arr) {
  if (!arr.length) return "-";
  const conteo = {};
  let maxVal = arr[0];
  let maxCount = 0;
  for (const v of arr) {
    conteo[v] = (conteo[v] || 0) + 1;
    if (conteo[v] > maxCount) {
      maxCount = conteo[v];
      maxVal = v;
    }
  }
  return `${maxVal} (${maxCount})`;
}

function actualizarKPIs(filtrados) {
  const kTotal = document.getElementById("kpi-total");
  const kSubTotal = document.getElementById("kpi-sub-total");
  const kCat = document.getElementById("kpi-categoria");
  const kMarca = document.getElementById("kpi-marca");
  const kInt = document.getElementById("kpi-intervencion");

  const todasLasIntervenciones = [];
  filtrados.forEach((s) => {
    String(s.intervencion || "")
      .split("+")
      .map((x) => x.trim())
      .filter(Boolean)
      .forEach((p) => todasLasIntervenciones.push(p));
  });

  if (kTotal) kTotal.textContent = filtrados.length;
  if (kSubTotal) kSubTotal.textContent = `De ${servicios.length} registrados en total`;
  if (kCat) kCat.textContent = calcularModa(filtrados.map((s) => s.categoria));
  if (kMarca) kMarca.textContent = calcularModa(filtrados.map((s) => s.marca));
  if (kInt) kInt.textContent = calcularModa(todasLasIntervenciones);
}

window.eliminarServicio = function (id) {
  if (!confirm(`¿Seguro que deseas eliminar el registro ${id}?`)) return;
  servicios = servicios.filter((s) => s.id !== id);
  guardarLocal();
  poblarSelectores();
  aplicarFiltros();
};

function formatearFechaInput(yyyy_mm_dd) {
  const [y, m, d] = yyyy_mm_dd.split("-");
  return `${d}/${m}/${y}`;
}

function generarNuevoID(offset = 1) {
  const maxNum = servicios.reduce((acc, s) => {
    const n = parseInt(String(s.id).replace(/\D/g, "")) || 0;
    return n > acc ? n : acc;
  }, 0);
  return `REP-${String(maxNum + offset).padStart(3, "0")}`;
}

// ============================================================================
// MOTOR INTELIGENTE DE PROCESAMIENTO DE TEXTO SEMANAL (LOTE)
// ============================================================================
function obtenerLunesActualYYYYMMDD() {
  const hoy = new Date();
  const dia = hoy.getDay();
  const diff = hoy.getDate() - dia + (dia === 0 ? -6 : 1);
  const lunes = new Date(hoy.setDate(diff));
  return lunes.toISOString().split("T")[0];
}

function sumarDiasAFecha(yyyy_mm_dd, dias) {
  const [y, m, d] = yyyy_mm_dd.split("-").map(Number);
  const fecha = new Date(y, m - 1, d);
  fecha.setDate(fecha.getDate() + dias);
  const dd = String(fecha.getDate()).padStart(2, "0");
  const mm = String(fecha.getMonth() + 1).padStart(2, "0");
  const yyyy = fecha.getFullYear();
  return `${dd}/${mm}/${yyyy}`;
}

function analizarLineaServicio(lineaRaw, fechaActual) {
  let texto = lineaRaw.replace(/^[-*•\d.)\s]+/, "").trim();
  if (!texto) return null;

  let notas = "";
  const matchDeCliente = texto.match(/\s+(?:de|cliente:?)\s+([A-ZÁÉÍÓÚÑa-záéíóúñ\s]{2,25})$/i);
  if (matchDeCliente) {
    const posibleCliente = matchDeCliente[1].trim();
    const palabrasTecnicas = ["pantalla", "bateria", "batería", "carga", "pin", "cabezal", "almohadilla", "almohadillas", "flex", "disco", "sistema", "office", "amarillo", "negro", "color", "software", "telefono", "teléfono", "placa", "camara", "cámara"];
    if (!palabrasTecnicas.includes(posibleCliente.toLowerCase())) {
      notas = posibleCliente.charAt(0).toUpperCase() + posibleCliente.slice(1);
    }
  }

  const tLow = texto.toLowerCase();

  // Detectar Marca
  let marca = "Genérico";
  if (tLow.includes("samsung") || /\b(a\d{2}[s]?|j\d|s2\d|m\d{2})\b/i.test(texto)) marca = "Samsung";
  else if (tLow.includes("xiaomi") || tLow.includes("redmi") || tLow.includes("poco")) marca = "Xiaomi";
  else if (tLow.includes("iphone") || tLow.includes("apple")) marca = "Apple";
  else if (tLow.includes("motorola") || tLow.includes("moto ")) marca = "Motorola";
  else if (tLow.includes("honor")) marca = "Honor";
  else if (tLow.includes("realme")) marca = "Realme";
  else if (tLow.includes("huawei")) marca = "Huawei";
  else if (tLow.includes("tecno") || tLow.includes("spark")) marca = "Tecno";
  else if (tLow.includes("nokia")) marca = "Nokia";
  else if (tLow.includes("tcl")) marca = "TCL";
  else if (tLow.includes("jbl")) marca = "JBL";
  else if (tLow.includes("epson") || /\bl3\d{2,3}\b/i.test(texto)) marca = "Epson";
  else if (tLow.includes("hp")) marca = "HP";
  else if (tLow.includes("brother")) marca = "Brother";
  else if (tLow.includes("acer")) marca = "Acer";
  else if (tLow.includes("asus")) marca = "Asus";
  else if (tLow.includes("dell")) marca = "Dell";
  else if (tLow.includes("lenovo")) marca = "Lenovo";

  // Detectar Categoría
  let categoria = "Smartphone";
  if (tLow.includes("impresora") || tLow.includes("epson") || tLow.includes("cabezal") || tLow.includes("almohadilla") || tLow.includes("cartucho")) {
    categoria = "Impresora";
  } else if (tLow.includes("laptop") || tLow.includes("notebook") || tLow.includes("acer") || tLow.includes("asus")) {
    categoria = "Laptop";
  } else if (tLow.includes("pc ") || tLow.includes("dell") || tLow.includes("office") || tLow.includes("sistema")) {
    categoria = "PC / Software";
  } else if (tLow.includes("disco hdd") || tLow.includes("sacar datos de disco")) {
    categoria = "Almacenamiento";
  } else if (tLow.includes("jbl") || tLow.includes("parlante") || tLow.includes("auricular")) {
    categoria = "Audio / Parlante";
  } else if (tLow.includes("tablet") || tLow.includes("ipad") || tLow.includes("pad")) {
    categoria = "Tablet";
  } else if (tLow.includes("nokia")) {
    categoria = "Celular Básico";
  }

  // Detectar Modelo
  let modelo = `${marca}`;
  const matchTraspaso = texto.match(/([a-zA-Z0-9]+\s+a\s+[a-zA-Z0-9]+)/i);
  const matchEpson = texto.match(/\b(L\d{3,4})\b/i);
  const matchGalaxy = texto.match(/\b(Galaxy\s+[A-Z0-9]+|A\d{2}[a-z]?|S\d{2}\s*(?:FE|Plus|Ultra)?|J\d\s*(?:Neo|Pro)?|M\d{2})\b/i);
  const matchRedmi = texto.match(/\b(Redmi\s*(?:Note\s*)?\d+[A-Za-z+]*|Poco\s*[A-Z0-9]+)\b/i);
  const matchIphone = texto.match(/\b(iPhone\s*\d+\s*(?:Pro\s*Max|Pro|Plus|Mini|XR|XS)?)\b/i);
  const matchMoto = texto.match(/\b(Moto\s*[A-Z0-9]+\s*(?:Power|Plus|Play)?)\b/i);

  if (tLow.includes("a samsung") || tLow.includes("a redmi") || tLow.includes("a honor") || tLow.includes("a iphone")) {
    if (tLow.includes("samsung a samsung")) modelo = "Samsung a Samsung";
    else if (tLow.includes("redmi a redmi")) modelo = "Redmi a Redmi";
    else if (tLow.includes("honor a honor")) modelo = "Honor a Honor";
    else if (matchTraspaso) modelo = matchTraspaso[1];
  } else if (matchEpson) {
    modelo = `EcoTank ${matchEpson[1].toUpperCase()}`;
  } else if (matchIphone) {
    modelo = matchIphone[1];
  } else if (matchRedmi) {
    modelo = matchRedmi[1];
  } else if (matchGalaxy) {
    const g = matchGalaxy[1];
    modelo = g.toLowerCase().startsWith("galaxy") ? g : `Galaxy ${g.toUpperCase()}`;
  } else if (matchMoto) {
    modelo = matchMoto[1];
  } else if (categoria === "Almacenamiento") {
    modelo = "Disco Duro HDD";
  } else if (categoria === "Laptop") {
    modelo = `Laptop ${marca}`;
  } else if (categoria === "PC / Software") {
    modelo = `PC ${marca}`;
  } else if (marca === "JBL") {
    modelo = "Parlante JBL";
  } else if (categoria === "Smartphone" && marca === "Genérico") {
    modelo = "Smartphone Android";
  }

  const trabajoLimpio = texto.charAt(0).toUpperCase() + texto.slice(1);
  const intervencion = deducirIntervencion(trabajoLimpio);
  const repuestos = deducirRepuestos(trabajoLimpio);

  return {
    fecha: fechaActual,
    categoria,
    marca,
    modelo,
    intervencion,
    trabajo: trabajoLimpio,
    repuestos,
    estado: "Entregado",
    notas,
    tecnico: TECNICO_NOMBRE
  };
}

function procesarTextoLote(textoCompleto, fechaLunesYYYYMMDD) {
  const lineas = textoCompleto.split(/\r?\n/);
  let fechaCurso = sumarDiasAFecha(fechaLunesYYYYMMDD, 0);
  const resultados = [];

  const mapaDias = [
    { regex: /^lunes\b/i, offset: 0 },
    { regex: /^martes\b/i, offset: 1 },
    { regex: /^mi[eé]rcoles\b/i, offset: 2 },
    { regex: /^jueves\b/i, offset: 3 },
    { regex: /^viernes\b/i, offset: 4 },
    { regex: /^s[aá]bado\b/i, offset: 5 },
    { regex: /^domingo\b/i, offset: 6 }
  ];

  for (let raw of lineas) {
    const l = raw.trim();
    if (!l) continue;

    // Verificar si la línea es un encabezado de día (Ej: "Lunes:" o "Martes")
    let esDia = false;
    for (const d of mapaDias) {
      if (d.regex.test(l) && l.length < 20) {
        fechaCurso = sumarDiasAFecha(fechaLunesYYYYMMDD, d.offset);
        esDia = true;
        break;
      }
    }
    if (esDia) continue;

    const item = analizarLineaServicio(l, fechaCurso);
    if (item) resultados.push(item);
  }

  return resultados;
}

function configurarEventos() {
  ["filtro-texto", "filtro-categoria", "filtro-marca", "filtro-intervencion", "filtro-fecha"].forEach((id) => {
    const el = document.getElementById(id);
    if (el) el.addEventListener("input", aplicarFiltros);
  });

  const btnLimpiar = document.getElementById("btn-limpiar");
  if (btnLimpiar) {
    btnLimpiar.addEventListener("click", () => {
      document.getElementById("filtro-texto").value = "";
      document.getElementById("filtro-categoria").value = "";
      document.getElementById("filtro-marca").value = "";
      document.getElementById("filtro-intervencion").value = "";
      document.getElementById("filtro-fecha").value = "";
      aplicarFiltros();
    });
  }

  const modal = document.getElementById("modal-registro");
  const abrirModalNuevo = () => {
    document.getElementById("inp-fecha").valueAsDate = new Date();
    document.getElementById("error-intervencion").classList.add("hidden");
    modal.classList.remove("hidden");
    modal.classList.add("flex");
  };

  const btnNuevo = document.getElementById("btn-nuevo");
  const btnNuevoFlotante = document.getElementById("btn-nuevo-flotante");
  if (btnNuevo) btnNuevo.addEventListener("click", abrirModalNuevo);
  if (btnNuevoFlotante) btnNuevoFlotante.addEventListener("click", abrirModalNuevo);

  const cerrarModal = () => {
    if (modal) {
      modal.classList.add("hidden");
      modal.classList.remove("flex");
    }
  };
  const btnCerrarModal = document.getElementById("btn-cerrar-modal");
  const btnCancelar = document.getElementById("btn-cancelar");
  if (btnCerrarModal) btnCerrarModal.addEventListener("click", cerrarModal);
  if (btnCancelar) btnCancelar.addEventListener("click", cerrarModal);

  const formServicio = document.getElementById("form-servicio");
  if (formServicio) {
    formServicio.addEventListener("submit", async (e) => {
      e.preventDefault();

      const checks = Array.from(document.querySelectorAll('input[name="intervencion-check"]:checked')).map((c) => c.value);
      const errorInt = document.getElementById("error-intervencion");
      if (checks.length === 0) {
        errorInt.classList.remove("hidden");
        return;
      }
      errorInt.classList.add("hidden");

      const trabajoTxt = document.getElementById("inp-trabajo").value.trim();
      const nuevo = {
        id: generarNuevoID(1),
        fecha: formatearFechaInput(document.getElementById("inp-fecha").value),
        categoria: document.getElementById("inp-categoria").value,
        marca: document.getElementById("inp-marca").value.trim(),
        modelo: document.getElementById("inp-modelo").value.trim(),
        intervencion: checks.join(" + "),
        trabajo: trabajoTxt,
        repuestos: document.getElementById("inp-repuestos").value.trim() || deducirRepuestos(trabajoTxt),
        estado: "Entregado",
        notas: document.getElementById("inp-notas").value.trim(),
        tecnico: TECNICO_NOMBRE
      };

      servicios.push(nuevo);
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
      e.target.reset();
      cerrarModal();

      if (driveUrl) {
        enviarFilaADrive(nuevo);
      }
    });
  }

  // EVENTOS DEL MODAL DE CARGA RÁPIDA POR TEXTO (LOTE)
  const modalLote = document.getElementById("modal-lote");
  const btnCargaLote = document.getElementById("btn-carga-lote");
  const btnCerrarLote = document.getElementById("btn-cerrar-lote");
  const btnCancelarLote = document.getElementById("btn-cancelar-lote");
  const btnAnalizarLote = document.getElementById("btn-analizar-lote");
  const btnGuardarLote = document.getElementById("btn-guardar-lote");

  const cerrarModalLote = () => {
    if (modalLote) {
      modalLote.classList.add("hidden");
      modalLote.classList.remove("flex");
    }
  };

  if (btnCargaLote && modalLote) {
    btnCargaLote.addEventListener("click", () => {
      document.getElementById("inp-lunes-lote").value = obtenerLunesActualYYYYMMDD();
      document.getElementById("inp-texto-lote").value = "";
      document.getElementById("contenedor-preview-lote").classList.add("hidden");
      document.getElementById("resumen-lote").textContent = "";
      btnGuardarLote.disabled = true;
      loteTemporal = [];
      modalLote.classList.remove("hidden");
      modalLote.classList.add("flex");
      inicializarIconos();
    });
  }
  if (btnCerrarLote) btnCerrarLote.addEventListener("click", cerrarModalLote);
  if (btnCancelarLote) btnCancelarLote.addEventListener("click", cerrarModalLote);

  if (btnAnalizarLote) {
    btnAnalizarLote.addEventListener("click", () => {
      const texto = document.getElementById("inp-texto-lote").value.trim();
      const lunesVal = document.getElementById("inp-lunes-lote").value || obtenerLunesActualYYYYMMDD();
      if (!texto) return alert("Pega primero la lista de servicios de la semana.");

      loteTemporal = procesarTextoLote(texto, lunesVal);
      const tbodyPreview = document.getElementById("tbody-preview-lote");
      const contPreview = document.getElementById("contenedor-preview-lote");
      const resumen = document.getElementById("resumen-lote");

      if (loteTemporal.length === 0) {
        alert("No se detectaron líneas de servicio válidas.");
        return;
      }

      resumen.textContent = `¡${loteTemporal.length} servicios detectados y clasificados!`;
      tbodyPreview.innerHTML = loteTemporal
        .map(
          (item, i) => `
          <tr class="hover:bg-slate-50">
            <td class="py-2 px-3 font-semibold text-teal-700 whitespace-nowrap">${item.fecha}</td>
            <td class="py-2 px-3">${item.categoria}</td>
            <td class="py-2 px-3"><strong>${item.marca}</strong> · ${item.modelo}</td>
            <td class="py-2 px-3 text-slate-600">${item.intervencion}</td>
            <td class="py-2 px-3 text-slate-800">${item.trabajo}</td>
            <td class="py-2 px-3 font-semibold text-teal-800">${item.notas || "-"}</td>
          </tr>
        `
        )
        .join("");

      contPreview.classList.remove("hidden");
      btnGuardarLote.disabled = false;
    });
  }

  if (btnGuardarLote) {
    btnGuardarLote.addEventListener("click", async () => {
      if (!loteTemporal.length) return;
      const nuevosConID = loteTemporal.map((item, idx) => ({
        id: generarNuevoID(idx + 1),
        ...item
      }));

      servicios.push(...nuevosConID);
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
      cerrarModalLote();

      if (driveUrl) {
        for (const reg of nuevosConID) {
          await enviarFilaADrive(reg);
        }
      }
      alert(`¡Se guardaron ${nuevosConID.length} servicios nuevos correctamente!`);
    });
  }

  const btnExportar = document.getElementById("btn-exportar");
  if (btnExportar) {
    btnExportar.addEventListener("click", () => {
      const encabezados = ["ID", "Fecha", "Categoría", "Marca", "Modelo", "Tipo de Intervención", "Trabajo Realizado", "Repuestos", "Estado", "Cliente / Notas"];
      const filas = servicios.map((s) => [
        s.id,
        s.fecha,
        s.categoria,
        s.marca,
        s.modelo,
        `"${s.intervencion}"`,
        `"${s.trabajo.replace(/"/g, '""')}"`,
        s.repuestos,
        s.estado,
        `"${(s.notas || "").replace(/"/g, '""')}"`
      ]);
      const csvContent = "\uFEFF" + [encabezados.join(";"), ...filas.map((f) => f.join(";"))].join("\n");

      const blob = new Blob([csvContent], { type: "text/csv;charset=utf-8;" });
      const url = URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "BD_Reparaciones_Junior_Almiron.csv";
      a.click();
    });
  }

  const modalDrive = document.getElementById("modal-drive");
  const btnConfigDrive = document.getElementById("btn-config-drive");
  if (btnConfigDrive && modalDrive) {
    btnConfigDrive.addEventListener("click", () => {
      document.getElementById("inp-drive-url").value = driveUrl;
      modalDrive.classList.remove("hidden");
      modalDrive.classList.add("flex");
    });
  }
  const btnCerrarDrive = document.getElementById("btn-cerrar-drive");
  if (btnCerrarDrive && modalDrive) {
    btnCerrarDrive.addEventListener("click", () => {
      modalDrive.classList.add("hidden");
      modalDrive.classList.remove("flex");
    });
  }
  const btnGuardarDrive = document.getElementById("btn-guardar-drive");
  if (btnGuardarDrive) {
    btnGuardarDrive.addEventListener("click", () => {
      driveUrl = document.getElementById("inp-drive-url").value.trim();
      localStorage.setItem(DRIVE_URL_KEY, driveUrl);
      actualizarBadgeDrive(Boolean(driveUrl));
      modalDrive.classList.add("hidden");
      modalDrive.classList.remove("flex");
      if (driveUrl) sincronizarDesdeDrive();
    });
  }
  const btnSubirDrive = document.getElementById("btn-subir-drive");
  if (btnSubirDrive) {
    btnSubirDrive.addEventListener("click", subirBaseCompletaADrive);
  }
}

function actualizarBadgeDrive(conectado) {
  const badge = document.getElementById("cloud-badge");
  if (!badge) return;
  if (conectado) {
    badge.textContent = "Google Drive Conectado";
    badge.className = "text-xs px-2.5 py-0.5 rounded-full bg-emerald-950 text-emerald-300 border border-emerald-600 font-medium";
  } else {
    badge.textContent = "Base Local Activa";
  }
}

async function enviarFilaADrive(registro) {
  try {
    await fetch(driveUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "add", row: registro })
    });
  } catch (err) {
    console.error("Error enviando a Google Drive:", err);
  }
}

async function subirBaseCompletaADrive() {
  const urlInput = document.getElementById("inp-drive-url").value.trim();
  if (!urlInput) return alert("Pega la URL de tu Google Apps Script.");
  driveUrl = urlInput;
  localStorage.setItem(DRIVE_URL_KEY, driveUrl);

  try {
    let registrosAngel = [];
    try {
      const res = await fetch(driveUrl);
      const data = await res.json();
      if (Array.isArray(data)) {
        registrosAngel = data.filter((r) => String(r.id || "").toUpperCase().startsWith("SER-"));
      }
    } catch (err) {
      console.warn("No se pudieron leer registros previos, enviando lote.", err);
    }

    const baseUnificada = [...registrosAngel, ...servicios];

    await fetch(driveUrl, {
      method: "POST",
      mode: "no-cors",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ action: "bulk", rows: baseUnificada })
    });
    actualizarBadgeDrive(true);
    alert(`¡Sincronización completa! Se guardaron los ${servicios.length} servicios de Junior junto con los ${registrosAngel.length} servicios de Ángel en tu Google Drive.`);
  } catch (e) {
    alert("Error al subir a Google Drive.");
  }
}

async function sincronizarDesdeDrive() {
  try {
    const res = await fetch(driveUrl);
    const data = await res.json();
    if (Array.isArray(data) && data.length > 0) {
      const soloJunior = data.filter((r) => String(r.id || "").toUpperCase().startsWith("REP-"));
      servicios = normalizarRegistros(fusionarConMaestros(soloJunior));
      guardarLocal();
      poblarSelectores();
      aplicarFiltros();
    }
  } catch (e) {
    console.log("Usando base completa local de Junior.");
  }
}