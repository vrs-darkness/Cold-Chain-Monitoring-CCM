#include <WiFiClientSecure.h>
#include <HTTPClient.h>
#include <DHT.h>

#define DHT_PIN 4 
#define DHT_TYPE DHT22
#include <Adafruit_BMP085.h>
Adafruit_BMP085 bmp;
int light;
const char* rootCACertificate = "Add Cert"
const char* ssid = "ash";
const char* password = "barcelona";

const char* mongodbEndpoint = "Add endpoint";
const char* mongodbDatabase = "DB";
const char* mongodbCollection = "Collection";
const char* mongodbApiKey = "Add api key";


DHT dht(DHT_PIN, DHT_TYPE);
WiFiClientSecure client;

void setup() {
  Serial.begin(115200);
  delay(1000);
  
  // Connect to WiFi
  WiFi.begin(ssid, password);
  Serial.print("Connecting to WiFi");
  while (WiFi.status() != WL_CONNECTED) {
    delay(500);
    Serial.print(".");
  }
  Serial.println("Connected");
    
  dht.begin();
  bmp.begin();
}

void loop() {
  // Read sensor data
  float temperature = dht.readTemperature();
  int lightState = digitalRead(DO_PIN);
    if (lightState == HIGH)
      light = 0 ;
    else
      light = 1 ;
    float humidity = dht.readHumidity();
    float pressure = bmp.readPressure();
  
  if (isnan(temperature) || isnan(humidity)) {
    Serial.println("Failed to read from DHT sensor!");
    delay(2000);
    return;
  }

  
  String jsonPayload = "{\"temperature\": " + String(temperature) + ", \"humidity\": " + String(humidity) + ", \"pressure\": " + String(pressure) + ", \"light\": " + String(light)"}";
  
 
  if (WiFi.status() == WL_CONNECTED) {
    HTTPClient http;

    Serial.println(jsonPayload);
    client.setCACert(rootCACertificate);
    client.setInsecure();
    http.begin(client, mongodbEndpoint);
    http.addHeader("Content-Type", "application/json");
    http.addHeader("x-api-key", mongodbApiKey);

    int httpResponseCode = http.POST(jsonPayload);
    
    if (httpResponseCode > 0) {
      Serial.print("HTTP Response code: ");
      Serial.println(httpResponseCode);
      String payload = http.getString();
      Serial.println(payload);
    } else {
      Serial.print("Error code: ");
      Serial.println(httpResponseCode);
    }
    
    http.end();
  } else {
    Serial.println("WiFi Disconnected");
  }
  
  delay(60000); // Send data every minute
}
