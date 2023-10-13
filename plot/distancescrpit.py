import math

def haversine(lat1, lon1, lat2, lon2):
    # 将经纬度从度数转换为弧度
    lat1 = math.radians(lat1)
    lon1 = math.radians(lon1)
    lat2 = math.radians(lat2)
    lon2 = math.radians(lon2)

    # 使用Haversine公式计算距离
    dlon = lon2 - lon1
    dlat = lat2 - lat1
    a = math.sin(dlat/2)**2 + math.cos(lat1) * math.cos(lat2) * math.sin(dlon/2)**2
    c = 2 * math.atan2(math.sqrt(a), math.sqrt(1-a))
    radius_of_earth = 6371  # 地球的半径（单位：公里）
    distance = radius_of_earth * c

    return distance
beijing_coords = (39.9042, 116.4074)
capitals = {
    'Thailand': (13.7563, 100.5018),
    'Malaysia': (3.1390, 101.6869),
    'United States': (38.8951, -77.0364),  # Washington D.C.
    'Indonesia': (-6.2088, 106.8456),  # Jakarta
    'Singapore': (1.3521, 103.8198),
    'Canada': (45.4215, -75.6919),  # Ottawa
    'Philippines': (14.6091, 121.0223),  # Manila
    'Myanmar': (19.7450, 96.1297),  # Naypyidaw
    'Australia': (-35.2809, 149.1300),  # Canberra
    'Korea': (37.5665, 126.9780),  # Seoul
    'Japan': (35.682839, 139.759455),  # Tokyo
    'Viet Nam': (21.0285, 105.8542),  # Hanoi
    'France': (48.8566, 2.3522),  # Paris
    'United Kingdom': (51.5074, -0.1278),  # London
    'Russia': (55.7558, 37.6176),  # Moscow
    'Venezuela': (10.4910, -66.8792),  # Caracas
    'Peru': (-12.0464, -77.0428),  # Lima
    'South Africa': (-25.7461, 28.1881),  # Pretoria
    'Italy': (41.9028, 12.4964),  # Rome
    'Kazakhstan': (51.1605, 71.4704),  # Nur-Sultan
    'Brazil': (-15.7801, -47.9292),  # Brasília
    'New Zealand': (-41.2865, 174.7762),  # Wellington
    'Spain': (40.4168, -3.7038),  # Madrid
    'Germany': (52.5200, 13.4050),  # Berlin
    'Argentina': (-34.6118, -58.4173),  # Buenos Aires
    'Laos': (17.9757, 102.6331),  # Vientiane
    'India': (28.6139, 77.2090),  # New Delhi
    'U.A.E.': (25.276987, 55.296249),  # Abu Dhabi
    'Panama': (8.9824, -79.5199),  # Panama City
    'Madagascar': (-18.8792, 47.5079),  # Antananarivo
}
api_key = 'AIzaSyApWQQgxxGf8CXWHnYMmTfpE8W478WMX1g'
base_url = 'https://maps.googleapis.com/maps/api/distancematrix/json'



distances = {}
for nation, coords in capitals.items():
    distance = haversine(coords[0], coords[1], beijing_coords[0], beijing_coords[1])
    distances[nation] = round(distance)

# 打印结果
for nation, distance in distances.items():

    print(f'{distance}')